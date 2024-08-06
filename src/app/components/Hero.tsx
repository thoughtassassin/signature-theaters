import { useRef, useLayoutEffect, useState } from "react";
import { homepage_hero_photos } from "@/app/utils/lists";
import { useTransform, useScroll, motion } from "framer-motion";

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
    </motion.div>
  );
};

export default Hero;
