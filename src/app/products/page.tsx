"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Exo_2 } from "next/font/google";
import { motion } from "framer-motion";
import RevealWrapper from "@/app/components/RevealWrapper";
import { productCategories } from "@/app/utils/data";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

export default function ProductsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-end justify-start pb-28 md:pb-24 px-8 md:px-24">
        <Image
          src="/Signature%20Theaters-09804.jpg"
          alt="Signature Theaters luxury products"
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
            Curated for Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className={`${play.className} text-5xl md:text-8xl text-white tracking-widest uppercase`}
          >
            Our Products
          </motion.h1>
        </div>
      </section>

      {/* Alternating sections */}
      {productCategories.map((cat, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={cat.id} className="border-t border-stone-800">
            <div
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } min-h-[60vh]`}
            >
              {/* Text side */}
              <RevealWrapper
                delay={0.1}
                className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-24"
              >
                <p
                  className={`${exo2.className} text-signature-yellow text-sm tracking-[0.3em] uppercase mb-4`}
                >
                  {String(cat.id).padStart(2, "0")}
                </p>
                <h2
                  className={`${play.className} text-4xl md:text-5xl text-white uppercase tracking-wider mb-6`}
                >
                  {cat.title}
                </h2>
                <p className={`${exo2.className} text-stone-400 leading-relaxed max-w-md`}>
                  {cat.description}
                </p>
              </RevealWrapper>

              {/* Image side */}
              <RevealWrapper delay={0.2} className="flex-1 min-h-[40vh] md:min-h-0">
                <div className="relative w-full h-full min-h-[40vh]">
                  <Image
                    src={`/optimized/${cat.image}`}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={isEven
                      ? "absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"
                      : "absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"
                    }
                  />
                </div>
              </RevealWrapper>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="border-t border-stone-800 py-24 px-8 text-center">
        <RevealWrapper>
          <h2
            className={`${play.className} text-4xl md:text-5xl text-white mb-4 tracking-wider uppercase`}
          >
            Find the Perfect Setup
          </h2>
          <p className={`${exo2.className} text-stone-400 mb-10 max-w-xl mx-auto`}>
            Our specialists will guide you to the ideal equipment for your space, budget, and lifestyle.
          </p>
          <Link
            href="/contact"
            className={`${exo2.className} border-2 border-signature-yellow text-signature-yellow px-10 py-4 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300`}
          >
            Talk to a Specialist
          </Link>
        </RevealWrapper>
      </section>
    </main>
  );
}
