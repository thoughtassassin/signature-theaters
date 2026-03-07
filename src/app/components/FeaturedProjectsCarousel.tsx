"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { Play, Exo_2 } from "next/font/google";
import { projects } from "@/app/utils/data";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

const slides = projects.map((p) => ({
  name: p.name,
  location: p.location,
  image: p.images[0],
}));

export default function FeaturedProjectsCarousel() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation
      loop
      className="w-full h-[70vh]"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="relative">
          <Image
            src={`/optimized/${slide.image}`}
            alt={slide.name}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-8 md:left-16 z-10">
            <p className={`${exo2.className} text-signature-yellow text-sm tracking-[0.3em] uppercase mb-2`}>
              {slide.location}
            </p>
            <h2 className={`${play.className} text-4xl md:text-6xl text-white uppercase tracking-wider`}>
              {slide.name}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
