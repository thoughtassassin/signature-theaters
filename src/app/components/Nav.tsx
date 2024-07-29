import { motion } from "framer-motion";

interface NavProps {
  children: React.ReactNode;
  isFixed: boolean;
  isMobile: boolean;
}

const Nav = ({ children, isFixed = false, isMobile = false}: NavProps) => {
  const fixed =
    "fixed animate-fade-in flex top-0 justify-between items-center pt-2 md:pt-4 pb-8 px-5 lg:px-28 w-full bg-gradient-to-b from-black from-60% to-transparent z-20";
  const absolute =
    "absolute animate-fade-in top-0 flex justify-between items-center py-16 md: px-14 lg:px-28 w-full bg-gradient-to-b from-black to-transparent z-20";
  return (
    <motion.nav className={isFixed || isMobile ? fixed : absolute}>{children}</motion.nav>
  );
};

export default Nav;
