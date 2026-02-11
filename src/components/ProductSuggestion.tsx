"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product, getRandomProduct } from "@/lib/products";
import { useTheme } from "@/lib/theme";
import { useEffect, useState } from "react";

interface ProductSuggestionProps {
    category: 'JA' | 'NEE' | 'MISSCHIEN';
}

export function ProductSuggestion({ category }: ProductSuggestionProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        setProduct(getRandomProduct(category));
    }, [category]);

    if (!product) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
        >
            <div className={`glass-card rounded-3xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-sky-100/50 shadow-lg shadow-sky-500/5'}`}>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Product Image */}
                    <div className="w-full md:w-1/3 relative aspect-square overflow-hidden bg-white/5">
                        <Image
                            src={product.imagePath}
                            alt={product.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="p-8 flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-wider mb-4 border border-amber-500/20">
                            Onze Tip ✨
                        </div>
                        <h3 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                            {product.name}
                        </h3>
                        <p className={`text-sm mb-6 ${isDark ? 'text-white/60' : 'text-sky-800/70'} leading-relaxed`}>
                            {product.description}
                        </p>

                        <a
                            href={product.shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${product.shopName === 'Bol.com'
                                    ? 'bg-[#0000ff] text-white hover:bg-[#0000cc] shadow-lg shadow-blue-500/20'
                                    : 'bg-[#ff5f00] text-white hover:bg-[#e65500] shadow-lg shadow-orange-500/20'
                                } hover:scale-105 active:scale-95`}
                        >
                            <span>Bekijk bij {product.shopName}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
