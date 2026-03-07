"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Play, Exo_2 } from "next/font/google";
import { motion } from "framer-motion";
import RevealWrapper from "@/app/components/RevealWrapper";
import { projects } from "@/app/utils/data";

const FeaturedProjectsCarousel = dynamic(
  () => import("@/app/components/FeaturedProjectsCarousel"),
  { ssr: false }
);

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Minimal dark hero */}
      <section className="h-screen flex items-end justify-start pb-16 md:pb-24 px-8 md:px-24 bg-black grid-background">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className={`${exo2.className} text-signature-yellow tracking-[0.3em] text-sm uppercase mb-4`}
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className={`${play.className} text-6xl md:text-8xl text-white tracking-widest uppercase`}
          >
            Our Projects
          </motion.h1>
        </div>
      </section>

      {/* Featured carousel */}
      <section>
        <FeaturedProjectsCarousel />
      </section>

      {/* Project grid */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <RevealWrapper className="mb-12">
          <h2 className={`${play.className} text-3xl text-white uppercase tracking-widest`}>
            All Projects
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.flatMap((project) =>
            project.images.map((image, imgIndex) => (
              <RevealWrapper
                key={`${project.id}-${imgIndex}`}
                delay={(imgIndex % 3) * 0.1}
              >
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={`/optimized/${image}`}
                    alt={`${project.name} — image ${imgIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
                    <p className={`${exo2.className} text-signature-yellow text-xs tracking-[0.3em] uppercase mb-2`}>
                      {project.location}
                    </p>
                    <h3 className={`${play.className} text-2xl text-white uppercase tracking-wider mb-4`}>
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${exo2.className} text-xs border border-signature-yellow text-signature-yellow px-3 py-1 tracking-wider`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </RevealWrapper>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-800 py-24 px-8 text-center">
        <RevealWrapper>
          <h2 className={`${play.className} text-4xl md:text-5xl text-white mb-4 tracking-wider uppercase`}>
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className={`${exo2.className} text-stone-400 mb-10 max-w-xl mx-auto`}>
            Every project begins with a conversation. Tell us about your vision.
          </p>
          <Link
            href="/contact"
            className={`${exo2.className} border-2 border-signature-yellow text-signature-yellow px-10 py-4 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300`}
          >
            Start a Project
          </Link>
        </RevealWrapper>
      </section>
    </main>
  );
}
