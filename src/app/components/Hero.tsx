import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { homepage_hero_photos } from "@/app/utils/lists";
import { useTransform, useScroll, motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const imageContainerRef = useRef<null | HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState<{
    src: string;
    alt: string;
  }>({
    src: homepage_hero_photos[0].src,
    alt: homepage_hero_photos[0].alt,
  });
  const [prevSrc, setPrevSrc] = useState<{
    prev: string;
    prevAlt: string;
  }>({
    prev: homepage_hero_photos[homepage_hero_photos.length - 1].src,
    prevAlt: homepage_hero_photos[homepage_hero_photos.length - 1].alt,
  });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    heroRef.current?.animate([{ opacity: 0 }, { opacity: 100 }], {
      duration: 500,
      fill: "forwards",
      easing: "ease-in",
    });
  }, []);

  useEffect(() => {
    let counter = 0;
    const animateImages = () => {
      if (counter === homepage_hero_photos.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
      imageContainerRef.current?.animate([{ opacity: 100 }, { opacity: 0 }], {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out",
      });
      const prev =
        counter === 0 ? homepage_hero_photos.length - 1 : counter - 1;
      setPrevSrc({
        prev: homepage_hero_photos[prev].src,
        prevAlt: homepage_hero_photos[prev].alt,
      });
      setTimeout(() => {
        setImageSrc({
          src: homepage_hero_photos[counter].src,
          alt: homepage_hero_photos[counter].alt,
        });
      }, 150);
      setTimeout(() => {
        imageContainerRef.current?.animate([{ opacity: 0 }, { opacity: 100 }], {
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        });
      }, 500);
    };
    const imageInterval = setInterval(animateImages, 5000);
    return () => clearInterval(imageInterval);
  }, [setImageSrc, imageContainerRef]);

  return (
    <motion.div
      ref={heroRef}
      style={{ y }}
      className="relative h-screen top-0 w-full opacity-0"
    >
      <div className="min-h-[100vh] w-full absolute">
        <Image
          src={`/optimized/${prevSrc.prev}`}
          alt={prevSrc.prevAlt}
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>
      <div ref={imageContainerRef} className="min-h-[100vh] w-full absolute">
        <Image
          src={`/optimized/${imageSrc.src}`}
          alt={imageSrc.alt}
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>
    </motion.div>
  );
};

export default Hero;
