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
      className="relative h-screen top-0 w-full absolute opacity-0"
      animate={{ opacity: 1 }}
    >
      {homepage_hero_photos.map(({ src }, index) => (
        <div
          className="min-h-[100vh] w-full absolute"
          style={{
            opacity: 0,
            backgroundImage: `url('/optimized/${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animationDelay: `${index * 6}s`,
            animationName: "imageAnimation",
            animationDuration: "36s",
            animationTimingFunction: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Hero;
