import { useRef, useLayoutEffect, useState } from "react";
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

  useLayoutEffect(() => {
    heroRef.current?.animate([{ opacity: 0 }, { opacity: 100 }], {
      duration: 500,
      fill: "forwards",
      easing: "ease-in",
    });
  }, []);

  useLayoutEffect(() => {
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
      }, 250);
      setTimeout(() => {
        imageContainerRef.current?.animate([{ opacity: 0 }, { opacity: 100 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-out",
        });
      }, 1000);
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
      {imageContainerRef ? <div
        className={`min-h-[100vh] w-full absolute bg-[/optimized/${prevSrc.prev}]`}
        style={{
          backgroundImage: `url('/optimized/${prevSrc.prev}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />: null}
      <div
        ref={imageContainerRef}
        className="min-h-[100vh] w-full absolute"
        style={{
          backgroundImage: `url('/optimized/${imageSrc.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </motion.div>
  );
};

export default Hero;
