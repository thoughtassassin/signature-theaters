import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface FixedNavSectionProps {
  children: React.ReactNode;
  theme?: 'black' | 'white';
  setIsNavFixed: (isFixed: boolean) => void;
}

const FixedNavSection = ({ children, setIsNavFixed, theme = 'black' }: FixedNavSectionProps) => {
  const fixedNavSectionRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(fixedNavSectionRef, { amount: 0.5 });

  useEffect(() => {
      setIsNavFixed(isInView);
  }, [isInView, setIsNavFixed]);

  return (
    <div
      ref={fixedNavSectionRef}
      className={theme === 'black' ?
        `relative z-10 flex flex-col items-center justify-start h-screen p-16 bg-black`
        : `relative z-10 flex flex-col items-center justify-start h-screen p-16 bg-stone-200`}
    >
      {children}
    </div>
  );
};

export default FixedNavSection;