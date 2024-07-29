"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, Exo_2 } from "next/font/google";
import Head from "next/head";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import FixedNavSection from "@/app/components/FixedNavSection";
import MobileMenu from "./components/MobileMenu";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState<number>(769);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
    if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    handleWindowSizeChange();
  }, [handleWindowSizeChange]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  const isMobile = width <= 768;

  return (
    <>
      <Head>
        <link rel="preload" href="/signature-theaters-logo.svg" as="image" />
      </Head>
      <main className="relative">
        {isVisible ? (
          <Nav isFixed={isNavFixed} isMobile={isMobile}>
            <Image
              src="/signature-theaters-logo.svg"
              alt="logo"
              width={isNavFixed || isMobile ? 175 : 250}
              height={78.84}
              priority
            />
            <MobileMenu />
            <ul
              className={`${
                exo2.className
              } hidden md:flex flex-col md:flex-row justify-end gap-6 lg:gap-12 grow items-center ${
                isNavFixed || isMobile ? "text-l" : "text-xl"
              } tracking-wider`}
            >
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Nav>
        ) : null}
        <Hero />
        <FixedNavSection setIsNavFixed={setIsNavFixed}>
          <h1
            className={`${play.className} text-6xl text-center text-signature-yellow tracking-widest uppercase mt-8`}
          >
            Signature Services
          </h1>
        </FixedNavSection>
        <FixedNavSection setIsNavFixed={setIsNavFixed}>
          <h1
            className={`${play.className} text-6xl text-center text-signature-yellow tracking-widest uppercase mt-8`}
          >
            Signature Products
          </h1>
        </FixedNavSection>
      </main>
    </>
  );
}
