interface FixedNavSectionProps {
  children: React.ReactNode;
  theme?: "black" | "gray" | "white";
}

const FixedNavSection = ({ children, theme = "black" }: FixedNavSectionProps) => {
  const bg =
    theme === "black" ? "bg-black"
    : theme === "gray" ? "bg-stone-900"
    : "bg-stone-200";

  return (
    <div className={`relative z-10 flex flex-col items-center justify-start min-h-screen p-8 md:p-16 ${bg}`}
    >
      {children}
    </div>
  );
};

export default FixedNavSection;
