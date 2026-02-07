"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/30"
          : "bg-gradient-to-r from-sky-300 to-sky-400 border border-white/50"
      }`}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Schakel naar lichte modus" : "Schakel naar donkere modus"}
    >
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        {/* Moon icon */}
        <motion.svg
          className={`w-4 h-4 ${isDark ? "text-cyan-400" : "text-sky-100"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          animate={{ opacity: isDark ? 1 : 0.5 }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>

        {/* Sun icon */}
        <motion.svg
          className={`w-4 h-4 ${isDark ? "text-slate-500" : "text-yellow-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          animate={{ opacity: isDark ? 0.5 : 1, rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <circle cx="12" cy="12" r="5" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </motion.svg>
      </div>

      {/* Sliding circle */}
      <motion.div
        className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center ${
          isDark
            ? "bg-gradient-to-br from-slate-700 to-slate-800"
            : "bg-gradient-to-br from-white to-sky-50"
        }`}
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-3 h-3 rounded-full bg-cyan-400"
          />
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-yellow-400"
          />
        )}
      </motion.div>
    </motion.button>
  );
}

// Compact version for sidebar
export function ThemeToggleCompact() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`w-full p-4 rounded-2xl flex items-center justify-between group transition-all duration-300 ${
        isDark
          ? "glass-card hover:bg-white/10"
          : "bg-white/50 hover:bg-white/70 border border-sky-200"
      }`}
    >
      <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-white" : "text-sky-800"}`}>
        {isDark ? "Dag Modus" : "Nacht Modus"}
      </span>
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          </g>
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-700 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
