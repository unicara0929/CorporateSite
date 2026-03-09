/*
 * Design: Kinetic Minimalism — Section Divider
 * A teal line that animates on scroll, connecting sections
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionDividerProps {
  variant?: "light" | "dark";
}

export default function SectionDivider({ variant = "light" }: SectionDividerProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`py-8 flex justify-center ${
        variant === "dark" ? "bg-[#1A1A2E]" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="w-24 h-[2px] bg-[#84CBC8] origin-left"
      />
    </div>
  );
}
