"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { useTheme } from "@/lib/theme";

interface AffiliateGridProps {
    products: Product[];
    title: string;
    reasonIcon?: string;
}

export const AffiliateGrid = ({ products, title, reasonIcon }: AffiliateGridProps) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    if (!products || products.length === 0) return null; // Added conditional rendering

    return (
        <div className="max-w-4xl mx-auto">
            {title && ( // Added conditional rendering for title
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight text-center mb-8 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                    {title}
                </h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {products.map((product, index) => {
                    const isPrimary = index === 0;
                    return (
                        <a
                            key={product.id}
                            href={product.shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex flex-col p-6 rounded-3xl transition-all duration-500 hover:scale-[1.02] border-2 ${isPrimary
                                ? (isDark ? 'bg-white/5 border-cyan-500/30 opacity-100' : 'bg-white border-sky-200 shadow-xl shadow-sky-500/5 opacity-100')
                                : (isDark ? 'bg-white/5 border-white/5 opacity-75 hover:opacity-90' : 'bg-white/50 border-transparent opacity-75 hover:opacity-90')
                                }`}
                        >
                            <div className="relative z-10 flex flex-col">
                                <span className={`text-lg font-black leading-tight mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                                    {product.resultTitle}
                                </span>

                                <span className={`text-sm font-black mb-4 ${isPrimary ? (isDark ? 'text-cyan-400' : 'text-sky-600') : (isDark ? 'text-white/60' : 'text-sky-900/60')}`}>
                                    {product.middelTitle}
                                </span>

                                <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 self-start ${isDark ? 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white' : 'bg-sky-50 text-sky-600 group-hover:bg-sky-100 group-hover:text-sky-700'}`}>
                                    {product.ctaText || 'bekijk voorbeeld'}
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Trust Marker */}
            <p className={`text-center text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mt-6 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                Dit heeft geen invloed op het weer, alleen op hoe snel je was droogt.
            </p>
        </div>
    );
};
