import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface FixedNavSectionProps {
  children: React.ReactNode;
  setIsNavFixed: (isFixed: boolean) => void;
}

const FixedNavSection = ({ children, setIsNavFixed }: FixedNavSectionProps) => {
  const fixedNavSectionRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(fixedNavSectionRef, { amount: 0.5 });

  useEffect(() => {
    console.log('fixed nav section', isInView);
    setIsNavFixed(isInView);
  }, [isInView, setIsNavFixed]);

  return (
    <div
      ref={fixedNavSectionRef}
      className="relative z-10 flex flex-col items-center justify-start h-screen p-16 bg-gradient-to-b from-black to-[#111]"
    >
      {children}
    </div>
  );
};

export default FixedNavSection;