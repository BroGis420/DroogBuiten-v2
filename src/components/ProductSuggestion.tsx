"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getProductForCategory, verdictCopy } from "@/lib/products";
import { useTheme } from "@/lib/theme";
import { useState } from "react";

interface ProductSuggestionProps {
    category: 'JA' | 'NEE' | 'MISSCHIEN';
}

export function ProductSuggestion({ category }: ProductSuggestionProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const product = getProductForCategory(category);
    const copy = verdictCopy[category];
    const [showWhy, setShowWhy] = useState(false);

    if (!product) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 mb-12 max-w-2xl mx-auto"
        >
            {/* Section Header */}
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight text-center mb-8 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                {copy.transition}
            </h2>

            <div className={`glass-card rounded-3xl p-8 overflow-hidden relative group transition-all duration-300`}>
                {/* Hover Gradient Effect - Matches weather tiles */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-cyan-300 to-blue-400'}`} />

                <div className="flex flex-col sm:flex-row gap-8 items-center relative z-10">
                    {/* Product image — small, rounded, non-commercial */}
                    <div className="w-32 h-32 relative overflow-hidden rounded-2xl bg-white/5 shrink-0 mx-auto sm:mx-0">
                        <Image
                            src={product.imagePath}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Product info */}
                    <div className="flex-1 text-center sm:text-left">
                        {/* Context label */}
                        <p className={`text-[11px] font-black uppercase tracking-widest mb-1 ${isDark ? 'text-white/30' : 'text-sky-700/40'}`}>
                            {copy.label}
                        </p>

                        <h3 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                            {product.name}
                        </h3>

                        <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-900/60'}`}>
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            {/* Neutral CTA */}
                            <a
                                href={product.shopUrl}
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className={`text-sm font-bold border-b-2 transition-all ${isDark
                                    ? 'text-white border-white/20 hover:border-white hover:text-white/90'
                                    : 'text-sky-900 border-sky-900/20 hover:border-sky-900 hover:text-sky-700'}`}
                            >
                                Bekijk het eens
                            </a>

                            {/* Subtle disclaimer */}
                            <span className={`text-[10px] uppercase font-bold tracking-tight ${isDark ? 'text-white/20' : 'text-sky-900/20'}`}>
                                (via {product.shopName})
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
