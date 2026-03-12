"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Play } from "next/font/google";

const play = Play({ weight: ["400"], subsets: ["latin"] });

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const item = {
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.6,
    },
  },
};

const navLinks = [
  { href: "/services", label: "Services", delay: 0.25 },
  { href: "/projects", label: "Projects", delay: 0.3 },
  { href: "/products", label: "Products", delay: 0.35 },
  { href: "/contact", label: "Contact", delay: 0.4 },
];

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed h-[100vh] w-[100%] z-30 ${play.className}`}
          variants={item}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100vh", opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit="exit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFF"
            className="size-10 absolute top-5 right-5 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>

          <motion.ul className="flex h-[100vh] w-[100%] bg-black bg-opacity-95 items-center justify-center flex-col text-2xl gap-8">
            {navLinks.map(({ href, label, delay }) => (
              <motion.li
                key={href}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: { ease: "easeInOut", delay: 0.4 - delay + 0.1 },
                }}
                className={pathname === href ? "text-signature-yellow" : "text-white"}
              >
                <a href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
