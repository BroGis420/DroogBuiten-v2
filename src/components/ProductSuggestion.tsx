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
            className="mt-8"
        >
            {/* Transition sentence — bridges verdict to product */}
            <p className={`text-center text-sm font-medium mb-4 ${isDark ? 'text-white/50' : 'text-sky-800/60'}`}>
                {copy.transition}
            </p>

            <div className={`glass-card rounded-3xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-sky-100/50'}`}>
                <div className="flex flex-col sm:flex-row items-center">

                    {/* Product image — compact */}
                    <div className="w-full sm:w-40 h-40 relative overflow-hidden bg-white/5 shrink-0">
                        <Image
                            src={product.imagePath}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Product info */}
                    <div className="p-6 flex-1">
                        <span className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-sky-700/50'}`}>
                            {copy.label}
                        </span>

                        <h3 className={`text-lg font-black mt-1 mb-1 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                            {product.name}
                        </h3>

                        <p className={`text-sm mb-4 ${isDark ? 'text-white/50' : 'text-sky-800/60'} leading-relaxed`}>
                            {product.description}
                        </p>

                        {/* CTA — neutral glassmorphism style */}
                        <a
                            href={product.shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${isDark
                                ? 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                                : 'bg-sky-950/5 text-sky-900 hover:bg-sky-950/10 border border-sky-200/50'
                                }`}
                        >
                            <span>Bekijk bij {product.shopName}</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        {/* "Waarom dit?" micro-interaction */}
                        <div className="mt-3">
                            <button
                                onClick={() => setShowWhy(!showWhy)}
                                className={`text-[11px] font-medium underline underline-offset-2 transition-colors ${isDark ? 'text-white/30 hover:text-white/50' : 'text-sky-700/40 hover:text-sky-700/60'}`}
                            >
                                {showWhy ? 'Sluiten' : 'Waarom dit?'}
                            </button>
                            <AnimatePresence>
                                {showWhy && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`text-[11px] mt-1 ${isDark ? 'text-white/35' : 'text-sky-800/45'}`}
                                    >
                                        {product.whyThis}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Affiliate disclosure — visible, droog, klein */}
                        <p className={`text-[10px] mt-3 ${isDark ? 'text-white/25' : 'text-sky-800/30'}`}>
                            Affiliate link. Kost jou niets extra.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
