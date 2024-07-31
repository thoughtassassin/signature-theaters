import {motion, AnimatePresence} from "framer-motion";

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
      duration: 0.3,
      delay: 1.2,
    },
  },
};

// Animation borrowed from https://github.com/devamitjha/framer_motion_animated_nav

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return isOpen ? (
    <AnimatePresence>
      <motion.div
        className="fixed h-[100vh] w-[100%] z-30"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 absolute top-5 right-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clip-rule="evenodd"
          />
        </svg>

        <motion.ul className="flex h-[100vh] w-[100%] bg-black bg-opacity-90 items-center justify-center flex-col text-2xl gap-5">
          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <a href="/services">Services</a>
          </motion.li>
          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <a href="/projects">Projects</a>
          </motion.li>
          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <a href="/products">Products</a>
          </motion.li>
          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <a href="/contact">Contact</a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export default MobileMenu;
