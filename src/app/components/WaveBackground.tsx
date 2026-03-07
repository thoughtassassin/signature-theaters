"use client";

import { useEffect, useRef } from "react";

// 5 overlapping sine waves in signature yellow at low opacity
const SHADER = /* wgsl */ `
struct Uni {
  time : f32,
  w    : f32,
  h    : f32,
  _pad : f32,
}
@group(0) @binding(0) var<uniform> u: Uni;

@vertex
fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  var q = array<vec2f, 6>(
    vec2f(-1, -1), vec2f(1, -1), vec2f(-1, 1),
    vec2f(-1,  1), vec2f(1, -1), vec2f( 1, 1)
  );
  return vec4f(q[i], 0.0, 1.0);
}

// Oscillator-style wave: glowing core + soft halo, like a synth or scope trace
fn wave(uv: vec2f, freq: f32, amp: f32, cy: f32, speed: f32, phase: f32) -> f32 {
  let wy   = sin(uv.x * freq + u.time * speed + phase) * amp + cy;
  let dist = abs(uv.y - wy);
  let core = smoothstep(0.007, 0.0,  dist);           // bright centre line
  let glow = smoothstep(0.040, 0.0,  dist) * 0.35;   // soft halo
  return core + glow;
}

@fragment
fn fs(@builtin(position) p: vec4f) -> @location(0) vec4f {
  let uv = vec2f(p.x / u.w, 1.0 - p.y / u.h);

  var a = 0.0;
  // 5 oscillator waves — evenly spaced vertically, each a clean periodic sine
  a += wave(uv, 4.0,  0.055, 0.18,  0.50, 0.00) * 0.28;
  a += wave(uv, 4.0,  0.055, 0.35,  0.50, 1.26) * 0.24;
  a += wave(uv, 4.0,  0.055, 0.52,  0.50, 2.51) * 0.28;
  a += wave(uv, 4.0,  0.055, 0.68,  0.50, 3.77) * 0.24;
  a += wave(uv, 4.0,  0.055, 0.84,  0.50, 5.03) * 0.26;

  // Signature yellow #FFC629 at low overall opacity
  return vec4f(1.0, 0.776, 0.161, clamp(a, 0.0, 1.0) * 0.50);
}
`;

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

      if (!("gpu" in navigator) || !(navigator as any).gpu) return;

    let rafId = 0;
    let cancelled = false;
      let gpuDevice: any = null;

    const run = async () => {
          const gpu = (navigator as any).gpu;

      const adapter = await gpu.requestAdapter({ powerPreference: "low-power" });
      if (!adapter || cancelled) return;

      const device = await adapter.requestDevice();
      if (cancelled) { device.destroy(); return; }
      gpuDevice = device;

          const ctx = canvas.getContext("webgpu") as any;
      if (!ctx) return;

      const format = gpu.getPreferredCanvasFormat();
      ctx.configure({ device, format, alphaMode: "premultiplied" });

      const mod = device.createShaderModule({ code: SHADER });

      const pipeline = device.createRenderPipeline({
        layout: "auto",
        vertex:   { module: mod, entryPoint: "vs" },
        fragment: {
          module: mod,
          entryPoint: "fs",
          targets: [{
            format,
            blend: {
              color: { srcFactor: "src-alpha", dstFactor: "one-minus-src-alpha", operation: "add" },
              alpha: { srcFactor: "one",       dstFactor: "one-minus-src-alpha", operation: "add" },
            },
          }],
        },
        primitive: { topology: "triangle-list" },
      });

      // 16-byte uniform buffer: f32 time, f32 w, f32 h, f32 pad
      const UNIFORM  = 0x0040; // GPUBufferUsage.UNIFORM
      const COPY_DST = 0x0008; // GPUBufferUsage.COPY_DST
      const ubuf = device.createBuffer({
        size: 16,
        usage: UNIFORM | COPY_DST,
      });

      const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [{ binding: 0, resource: { buffer: ubuf } }],
      });

      const setSize = () => {
        const dpr = window.devicePixelRatio ?? 1;
        canvas.width  = Math.round(canvas.offsetWidth  * dpr);
        canvas.height = Math.round(canvas.offsetHeight * dpr);
      };

      setSize();
      const ro = new ResizeObserver(setSize);
      ro.observe(canvas);

      const t0 = performance.now();

      const frame = () => {
        if (cancelled) return;

        const t = (performance.now() - t0) / 1000;
        device.queue.writeBuffer(ubuf, 0, new Float32Array([t, canvas.width, canvas.height, 0]));

        const enc  = device.createCommandEncoder();
        const pass = enc.beginRenderPass({
          colorAttachments: [{
            view:       ctx.getCurrentTexture().createView(),
            clearValue: [0, 0, 0, 0],
            loadOp:     "clear",
            storeOp:    "store",
          }],
        });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, bindGroup);
        pass.draw(6);
        pass.end();
        device.queue.submit([enc.finish()]);

        rafId = requestAnimationFrame(frame);
      };

      frame();
    };

    run();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      gpuDevice?.destroy();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, black)" }}
      />
    </>
  );
}
