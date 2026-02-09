"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { ThemeToggle, ThemeToggleCompact } from "@/components/ThemeToggle";

interface NavbarProps {
    // No props needed currently
}

export function Navbar({ }: NavbarProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Header */}
            <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${isDark ? 'bg-black/30 border-white/5' : 'bg-white/50 border-sky-200/50'}`}>
                <div className="container mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className={`p-3 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-white/50'}`}
                                aria-label="Menu"
                            >
                                <div className="flex flex-col gap-1.5">
                                    <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? 'opacity-0' : ''}`} />
                                    <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>

                        <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter group relative">
                            <span className={`absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20'}`} />
                            <span className={`relative transition-all duration-300 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-900 group-hover:text-sky-600'}`}>DroogWeerVandaag</span>
                            <span className="relative animate-text-shimmer">.nl</span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Side Menu */}
            <aside className={`fixed top-0 left-0 h-full w-80 sm:w-96 z-[100] transition-all duration-500 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={`h-full backdrop-blur-3xl border-r p-8 flex flex-col ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/90 border-sky-200'}`}>
                    <div className="flex justify-between items-center mb-12">
                        <span className={`text-xs font-black uppercase tracking-[0.3em] ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Menu</span>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 ${isDark ? 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10' : 'bg-sky-100 text-sky-400 hover:text-sky-600 hover:bg-sky-200'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="space-y-3 flex-1">
                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group border ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-cyan-500/30' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20 border-amber-400/30'}`}
                        >
                            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="5" />
                            </svg>
                            <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Droogvoorspelling</span>
                            <div className={`ml-auto w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-cyan-400' : 'bg-amber-500'}`} />
                        </Link>
                        <Link
                            href="/calculator"
                            onClick={() => setMenuOpen(false)}
                            className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-sky-100'}`}
                        >
                            <svg className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
                                <path d="M9 7h6M9 11h6M9 15h6" strokeWidth="2" />
                            </svg>
                            <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Droogtijd Calculator</span>
                        </Link>
                        <Link
                            href="/stoffen"
                            onClick={() => setMenuOpen(false)}
                            className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-sky-100'}`}
                        >
                            <svg className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-sky-500'}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 2L1 7l4 2v13h14V9l4-2-5-5h-4.5a2.5 2.5 0 01-5 0H6z" />
                            </svg>
                            <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Stoffen Gids</span>
                        </Link>
                        <Link
                            href="/over-ons"
                            onClick={() => setMenuOpen(false)}
                            className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-sky-100'}`}
                        >
                            <svg className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-sky-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Over Ons</span>
                        </Link>
                    </nav>

                    <div className={`mt-auto space-y-3 pt-8 border-t ${isDark ? 'border-white/10' : 'border-sky-200'}`}>
                        <ThemeToggleCompact />
                    </div>
                </div>
            </aside>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-[99] backdrop-blur-sm"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
