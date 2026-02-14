"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { useTheme } from "@/lib/theme";

interface AffiliateGridProps {
    products: Product[];
    title: string;
}

export function AffiliateGrid({ products, title }: AffiliateGridProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 mb-12 max-w-4xl mx-auto"
        >
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight text-center mb-8 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                {title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {products.map((product) => (
                    <a
                        key={product.id}
                        href={product.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group transition-all duration-300"
                    >
                        {/* Hover Gradient Effect - Matches city tile */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-purple-500 to-indigo-500' : 'bg-gradient-to-br from-sky-400 to-indigo-400'}`} />

                        {/* External Link Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`absolute top-4 right-4 w-3.5 h-3.5 transition-all duration-300 ${isDark ? 'text-white/20 group-hover:text-white/60' : 'text-sky-900/20 group-hover:text-sky-900/60'}`}
                        >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>

                        <span className={`text-base font-bold relative z-10 transition-colors duration-300 ${isDark ? 'text-white/80 group-hover:text-white' : 'text-sky-900/80 group-hover:text-sky-900'}`}>
                            {product.name}
                        </span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
