"use client";

import { Play, Exo_2 } from "next/font/google";
import Link from "next/link";
import Hero from "@/app/components/Hero";
import FixedNavSection from "@/app/components/FixedNavSection";
import RevealWrapper from "@/app/components/RevealWrapper";
import { services, productCategories } from "@/app/utils/data";
import WaveBackground from "@/app/components/WaveBackground";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

const serviceIcons = [
  // Theater screen
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8">
    <rect x="2" y="3" width="20" height="14" rx="1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
  </svg>,
  // Speaker
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>,
  // Home
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Sun / outdoor
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>,
  // Lightbulb
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>,
  // Star
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>,
];

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      {/* Services section */}
      <FixedNavSection theme="gray">
        <WaveBackground />
        <div className="relative z-10 w-full flex flex-col items-center">
          <RevealWrapper className="w-full text-center mb-12 mt-8">
            <h2
              className={`${play.className} text-5xl md:text-6xl text-center text-white tracking-widest uppercase`}
            >
              Signature Services
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {services.map((service, index) => (
              <RevealWrapper key={service.id} delay={index * 0.1}>
                <div className="bg-signature-yellow p-6 flex flex-col gap-3 h-full">
                  <div className="text-stone-900">{serviceIcons[index]}</div>
                  <h3 className={`${play.className} text-lg text-stone-900 uppercase tracking-wider`}>
                    {service.title}
                  </h3>
                  <p className={`${exo2.className} text-stone-800 text-sm leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper delay={0.6} className="mt-10">
            <Link
              href="/services"
              className={`${exo2.className} border-2 border-signature-yellow text-signature-yellow px-8 py-3 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300`}
            >
              View All Services
            </Link>
          </RevealWrapper>
        </div>
      </FixedNavSection>

      {/* Products section */}
      <FixedNavSection theme="black">
        <RevealWrapper className="w-full text-center mb-12 mt-8">
          <h2
            className={`${play.className} text-5xl md:text-6xl text-center text-signature-yellow tracking-widest uppercase`}
          >
            Signature Products
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {productCategories.slice(0, 3).map((cat, index) => (
            <RevealWrapper key={cat.id} delay={index * 0.15}>
              <div
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('/optimized/${cat.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`${play.className} text-xl text-white uppercase tracking-wider mb-2`}>
                    {cat.title}
                  </h3>
                  <p className={`${exo2.className} text-stone-300 text-sm leading-relaxed`}>
                    {cat.description}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.5} className="mt-10">
          <Link
            href="/products"
            className={`${exo2.className} border-2 border-signature-yellow text-signature-yellow px-8 py-3 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300`}
          >
            View All Products
          </Link>
        </RevealWrapper>
      </FixedNavSection>
    </main>
  );
}
