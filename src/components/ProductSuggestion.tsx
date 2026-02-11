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
            className="mt-12 mb-12"
        >
            {/* Section Header - Matches page.tsx style */}
            <div className="flex items-center justify-between mb-6 px-2">
                <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>
                    {copy.transition}
                </h2>
                <span className={`hidden sm:inline-block text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>
                    Aanbevolen
                </span>
            </div>

            <div className={`glass-card rounded-3xl overflow-hidden relative group`}>
                {/* Hover Gradient Effect - Matches weather tiles */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-cyan-300 to-blue-400'}`} />

                <div className="flex flex-col sm:flex-row items-center relative z-10">
                    {/* Product image */}
                    <div className="w-full sm:w-48 h-48 sm:h-auto min-h-[12rem] relative overflow-hidden bg-white/5 shrink-0">
                        <Image
                            src={product.imagePath}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Product info */}
                    <div className="p-6 sm:p-8 flex-1">
                        <span className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-sky-700/50'}`}>
                            {copy.label}
                        </span>

                        <h3 className={`text-xl sm:text-2xl font-black mt-2 mb-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                            {product.name}
                        </h3>

                        <p className={`text-sm sm:text-base mb-6 ${isDark ? 'text-white/60' : 'text-sky-900/70'} leading-relaxed max-w-xl`}>
                            {product.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            {/* CTA */}
                            <a
                                href={product.shopUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm ${isDark
                                    ? 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                                    : 'bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200/60'
                                    }`}
                            >
                                <span>Bekijk bij {product.shopName}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            {/* "Waarom dit?" micro-interaction */}
                            <div>
                                <button
                                    onClick={() => setShowWhy(!showWhy)}
                                    className={`text-xs font-bold transition-colors ${isDark ? 'text-white/40 hover:text-white/60' : 'text-sky-900/40 hover:text-sky-900/60'}`}
                                >
                                    {showWhy ? 'Sluiten' : 'Waarom dit?'}
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {showWhy && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className={`text-xs italic ${isDark ? 'text-white/50' : 'text-sky-800/60'} border-l-2 pl-3 ${isDark ? 'border-white/10' : 'border-sky-900/10'}`}>
                                        {product.whyThis}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Affiliate disclosure */}
                        <p className={`text-[10px] mt-4 ${isDark ? 'text-white/20' : 'text-sky-900/20'}`}>
                            * Affiliate link. Kost jou niets extra.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
