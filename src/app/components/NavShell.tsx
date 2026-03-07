"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import Nav from "@/app/components/Nav";
import MobileMenuButton from "@/app/components/MobileMenuButton";
import MobileMenu from "@/app/components/MobileMenu";

const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function NavShell() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isSecondaryPage = pathname !== "/";

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
    setIsVisible(true);
  }, []);

  const handleScroll = useCallback(() => {
    setIsNavFixed(window.scrollY > 100);
  }, []);

  useEffect(() => {
    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  if (!isVisible) return null;

  const showFixed = isNavFixed || isMobile || isSecondaryPage;

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <Nav isFixed={showFixed} isMobile={isMobile}>
        <a href="/">
          <Image
            src="/signature-theaters-logo.svg"
            alt="Signature Theaters"
            width={showFixed ? 175 : 250}
            height={78.84}
            priority
          />
        </a>
        <MobileMenuButton isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <ul
          className={`${exo2.className} hidden md:flex flex-row justify-end gap-6 lg:gap-12 grow items-center ${
            showFixed ? "text-l" : "text-xl"
          } tracking-wider`}
          style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 1)" }}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={
                  pathname === href
                    ? "text-signature-yellow"
                    : "text-white hover:text-signature-yellow transition-colors duration-200"
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </>
  );
}
