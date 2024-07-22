import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { homepage_hero_photos } from "@/app/utils/lists";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useInView, useTransform, useScroll, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

interface HeroProps {
  setIsNavFixed: (isFixed: boolean) => void;
}

const Hero = ({ setIsNavFixed }: HeroProps) => {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(heroRef, { amount: 0.5 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const counter = useRef(0);

  const fixNav = useCallback(() => {
    setIsNavFixed(false);
  }, [setIsNavFixed, setIsNavFixed]);

  useEffect(() => {
    fixNav();
  }, [fixNav]);

  return (
    <motion.div
      ref={heroRef}
      style={{ y }}
      className="relative h-screen top-0"
    >
      <Swiper
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        autoHeight={true}
        fadeEffect={{ crossFade: true }}
      >
        {homepage_hero_photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="h-[100vh]">
              <Image
                src={`/optimized/${photo.src}`}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
