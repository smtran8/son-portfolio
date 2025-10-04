"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function TagChip({ label, active, onClick }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? label === "All" 
            ? "bg-[--accent] text-black border-[--accent] shadow-lg shadow-blue-500/30"
            : "bg-[--accent] text-white border-[--accent] shadow-lg shadow-blue-500/30"
          : "border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] hover:shadow-lg hover:shadow-blue-500/30"
      }`}
      aria-pressed={active}
    >
      {label}
    </motion.button>
  );
}


