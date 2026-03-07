"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const RevealWrapper = ({ children, delay = 0, className }: RevealWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
