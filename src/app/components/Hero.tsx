import { useRef, useEffect } from "react";
import Image from "next/image";
import { homepage_hero_photos } from "@/app/utils/lists";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useInView, motion } from "framer-motion";

import "swiper/css";

interface HeroProps {
  setIsNavFixed: (isFixed: boolean) => void;
}

const Hero = ({ setIsNavFixed }: HeroProps) => {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(heroRef, { amount: 0.5 });
  const counter = useRef(0);

  useEffect(() => {
    // TODO: Fix hacky solution to prevent flickering
    counter.current++;
    if (counter.current < 3) return;
    setIsNavFixed(!isInView);
  }, [isInView, setIsNavFixed]);

  return (
    <div
      ref={heroRef}
      className="relative h-screen bg-cover bg-center bg-hero-1"
    >
      <Swiper
        autoplay={true}
        loop={true}
        modules={[Autoplay]}
        autoHeight={true}
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
    </div>
  );
};

export default Hero;
