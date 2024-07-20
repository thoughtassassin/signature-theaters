import { motion } from "framer-motion";

interface NavProps {
  children: React.ReactNode;
  isFixed: boolean;
}

const Nav = ({ children, isFixed }: NavProps) => {
  return (
    <motion.nav
      className={
        isFixed
          ? "fixed flex top-0 justify-between items-center pt-4 pb-8 px-28 w-full bg-gradient-to-b from-black from-60% to-transparent"
          : "absolute top-0 flex justify-between items-center py-16 px-28 w-full bg-gradient-to-b from-black to-transparent"
      }
    >
      {children}
    </motion.nav>
  );
};

export default Nav;
