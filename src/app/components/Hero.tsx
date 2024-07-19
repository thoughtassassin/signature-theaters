import { useRef, useEffect } from "react";
import { HeroPhoto } from "../utils/lists";
import { useInView } from "framer-motion";

interface HeroProps {
  list: HeroPhoto[];
  children: React.ReactNode;
  setIsNavFixed: (isFixed: boolean) => void;
}

const Hero = ({ list, children, setIsNavFixed }: HeroProps) => {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(heroRef, { amount: 0.5 });
  const counter = useRef(0);

  useEffect(() => {
    // TODO: Fix hacky solution to prevent flickering
    counter.current++;
    if (counter.current < 3) return;
    setIsNavFixed(!isInView);
  }, [isInView, setIsNavFixed]);

  useEffect(() => {
    if (heroRef.current === null) return;
    let carouselIndex = 2;
    const carousel = setInterval(() => {
      const item = list.find((item) => item.id === carouselIndex);
      if (heroRef.current === null || item === undefined) return;
      heroRef.current.style.backgroundImage = `url('/optimized/${item.src}')`;
      carouselIndex = carouselIndex === list.length - 1 ? 1 : carouselIndex + 1;
    }, 5000);
    return () => {
      clearInterval(carousel);
    };
  }, [list, heroRef]);

  return (
    <div
      ref={heroRef}
      className="h-screen bg-cover bg-fixed"
      style={{ backgroundImage: `url('/optimized/${list[0].src}')` }}
    >
      {children}
    </div>
  );
};

export default Hero;
