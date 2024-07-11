import Image from "next/image";
import { Play } from "next/font/google";
import Head from "next/head";

const play = Play({ weight:['400'], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/signature-theaters-02239.jpg" as="image" />
      </Head>
      <main>
        <div className="h-screen bg-cover bg-[url('/signature-theaters-02239.jpg')] bg-fixed">
          <nav className="flex justfiy-between items-center py-16 px-28 w-full bg-gradient-to-b from-black to-transparent">
            <Image
              src="/signature-theaters-logo.svg"
              alt="logo"
              width={250}
              height={100}
            />
            <ul className="flex justify-end gap-12 grow items-center text-xl">
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
          </nav>
        </div>
        <div className="flex flex-col items-center justify-start h-screen p-16 bg-gradient-to-b from-black to-[#111]">
          <h1
            className={`${play.className} text-6xl text-center text-[#FFC629] tracking-widest uppercase mt-8`}
          >
            Signature Services
          </h1>
        </div>
      </main>
    </>
  );
}
