"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Exo_2 } from "next/font/google";
import Head from "next/head";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  const [isNavFixed, setIsNavFixed] = useState(false);

  return (
    <>
      <Head>
        <link rel="preload" href="/signature-theaters-logo.svg" as="image" />
      </Head>
      <main className="relative">
        <Nav isFixed={isNavFixed}>
          <Image
            src="/signature-theaters-logo.svg"
            alt="logo"
            width={isNavFixed ? 175 : 250}
            height={78.84}
          />
          <ul
            className={
              isNavFixed
                ? `${exo2.className} flex justify-end gap-12 grow items-center text-l tracking-wider`
                : `${exo2.className} flex justify-end gap-12 grow items-center text-xl tracking-wider`
            }
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
        <Hero setIsNavFixed={setIsNavFixed} />
        <div className="flex flex-col items-center justify-start h-screen p-16 bg-gradient-to-b from-black to-[#111]">
          <h1
            className={`${play.className} text-6xl text-center text-[#CE0E2D] tracking-widest uppercase mt-8`}
          >
            Signature Services
          </h1>
        </div>
        <div className="flex flex-col items-center justify-start h-screen p-16 bg-gradient-to-b from-black to-[#111]">
          <h1
            className={`${play.className} text-6xl text-center text-[#FFC629] tracking-widest uppercase mt-8`}
          >
            Signature Products
          </h1>
        </div>
      </main>
    </>
  );
}
