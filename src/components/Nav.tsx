"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="font-semibold tracking-tight text-[rgb(var(--foreground))] hover:text-[--accent] transition-colors">
        Son Tran
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-5 text-sm">
          <Link href="/projects" className="text-[rgb(var(--muted-foreground))] hover:text-[--accent] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-[rgb(var(--muted-foreground))] hover:text-[--accent] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[rgb(var(--muted-foreground))] hover:text-[--accent] transition-colors">
            Contact
          </Link>
        </div>
        
        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-xl bg-[rgb(var(--muted))] hover:bg-[rgb(var(--card-border))] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-[rgb(var(--foreground))]" />
          ) : (
            <Moon className="h-4 w-4 text-[rgb(var(--foreground))]" />
          )}
        </motion.button>
      </div>
    </nav>
  );
}


