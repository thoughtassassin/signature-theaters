"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Exo_2 } from "next/font/google";
import { Project } from "@/app/utils/data";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

interface ProjectLightboxProps {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}

const ProjectLightbox = ({ project, initialIndex, onClose }: ProjectLightboxProps) => {
  const [index, setIndex] = useState(initialIndex);
  const hasMultiple = project.images.length > 1;

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, project.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % project.images.length);
      }
      if (hasMultiple && e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + project.images.length) % project.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultiple, project.images.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#FFF"
        className="size-8 md:size-10 absolute top-5 right-5 cursor-pointer z-10"
        onClick={onClose}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
          clipRule="evenodd"
        />
      </svg>

      {hasMultiple && (
        <>
          <button
            aria-label="Previous image"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-signature-yellow transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + project.images.length) % project.images.length);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 md:size-10">
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            aria-label="Next image"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-signature-yellow transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % project.images.length);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 md:size-10">
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}

      <div
        className="relative w-[90vw] h-[65vh] md:w-[80vw] md:h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={`/optimized/${project.images[index]}`}
              alt={`${project.name} — image ${index + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {project.location && (
          <p className={`${exo2.className} text-signature-yellow text-xs tracking-[0.3em] uppercase mb-1`}>
            {project.location}
          </p>
        )}
        <h3 className={`${play.className} text-xl md:text-2xl text-white uppercase tracking-wider`}>
          {project.name}
        </h3>
        {hasMultiple && (
          <p className={`${exo2.className} text-stone-400 text-xs mt-2 tracking-wider`}>
            {index + 1} / {project.images.length}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectLightbox;
