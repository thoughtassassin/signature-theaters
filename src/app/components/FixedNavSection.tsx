interface FixedNavSectionProps {
  children: React.ReactNode;
  theme?: "black" | "white";
}

const FixedNavSection = ({ children, theme = "black" }: FixedNavSectionProps) => {
  return (
    <div
      className={
        theme === "black"
          ? "relative z-10 flex flex-col items-center justify-start min-h-screen p-8 md:p-16 bg-black"
          : "relative z-10 flex flex-col items-center justify-start min-h-screen p-8 md:p-16 bg-stone-200"
      }
    >
      {children}
    </div>
  );
};

export default FixedNavSection;
