"use client";

import { useRef } from "react";
import { homepage_hero_photos } from "@/app/utils/lists";
import { useTransform, useScroll, motion } from "framer-motion";
import { Play, Exo_2 } from "next/font/google";
import Link from "next/link";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

const Hero = () => {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={heroRef}
      style={{ y }}
      className="relative h-screen top-0 w-full absolute"
    >
      {homepage_hero_photos.map(({ src }, index) => (
        <div
          key={index}
          className="min-h-[100vh] w-full fixed"
          style={{
            opacity: 0,
            backgroundImage: `url('/optimized/${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animationDelay: `${index * 6}s`,
            animationName: "imageAnimation",
            animationDuration: homepage_hero_photos.length * 6 + "s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Hero text overlay */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className={`${play.className} text-5xl md:text-7xl lg:text-8xl text-white tracking-widest uppercase mb-4`}
          style={{ textShadow: "2px 2px 15px rgba(0,0,0,0.9)" }}
        >
          Signature Theaters
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className={`${exo2.className} text-lg md:text-2xl text-stone-200 tracking-widest mb-10 max-w-2xl`}
          style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.9)" }}
        >
          Luxury Home Theater &amp; Smart Home Integration
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        >
          <Link
            href="/projects"
            className={`${exo2.className} border-2 border-signature-yellow text-signature-yellow px-8 py-3 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300`}
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-[2] pb-safe"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-white/60"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
