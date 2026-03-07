"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Exo_2 } from "next/font/google";
import { motion } from "framer-motion";
import RevealWrapper from "@/app/components/RevealWrapper";
import { services } from "@/app/utils/data";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-end justify-start pb-28 md:pb-24 px-8 md:px-24">
        <Image
          src="/Signature%20Theaters-01642.jpg"
          alt="Signature Theaters luxury installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className={`${exo2.className} text-signature-yellow tracking-[0.3em] text-sm uppercase mb-4`}
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className={`${play.className} text-5xl md:text-8xl text-white tracking-widest uppercase`}
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <RevealWrapper key={service.id} delay={(index % 2) * 0.1}>
              <div className="border border-stone-800 p-8 relative overflow-hidden group hover:border-stone-600 transition-colors duration-300">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-signature-yellow" />
                {/* Decorative number */}
                <span
                  className={`${play.className} text-9xl font-bold text-stone-900 absolute top-2 right-4 select-none leading-none transition-colors duration-300 group-hover:text-stone-800`}
                >
                  {String(service.id).padStart(2, "0")}
                </span>
                <div className="relative z-10 pt-4">
                  <h2
                    className={`${play.className} text-2xl text-white mb-4 uppercase tracking-wider`}
                  >
                    {service.title}
                  </h2>
                  <p className={`${exo2.className} text-stone-400 leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-800 py-24 px-8 text-center">
        <RevealWrapper>
          <h2 className={`${play.className} text-4xl md:text-5xl text-white mb-4 tracking-wider uppercase`}>
            Ready to Start Your Project?
          </h2>
          <p className={`${exo2.className} text-stone-400 mb-10 max-w-xl mx-auto`}>
            Let&apos;s build something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className={`${exo2.className} border-2 border-signature-yellow text-signature-yellow px-10 py-4 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300`}
          >
            Get in Touch
          </Link>
        </RevealWrapper>
      </section>
    </main>
  );
}
