"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { getWeatherDescription, getWeatherIcon, type WeatherData, type HourlyForecast } from "@/lib/weather";
import { getDryingVerdict, checkIfPrecipitating } from "@/lib/drying-logic";
import { getProductsForCategory, verdictCopy } from "@/lib/products";
import { AffiliateGrid } from "@/components/IndoorSolutions";
import { Navbar } from "@/components/Navbar";

import { useTheme } from "@/lib/theme";

interface CityDashboardClientProps {
    weather: WeatherData;
    cityInfo: {
        name: string;
        isCoastal: boolean;
        nearbyCities: { name: string; slug: string }[];
    };
}

function DryingScoreGauge({ score, isDark }: { score: number; isDark: boolean }) {
    const getScoreColor = (s: number) => {
        if (s >= 80) return "from-emerald-500 to-green-400";
        if (s >= 60) return isDark ? "from-cyan-500 to-emerald-400" : "from-sky-500 to-sky-400";
        if (s >= 40) return "from-yellow-500 to-amber-400";
        return "from-red-500 to-orange-400";
    };

    const getScoreLabel = (s: number) => {
        if (s >= 80) return "Uitstekend";
        if (s >= 60) return "Goed";
        if (s >= 40) return "Matig";
        return "Slecht";
    };

    return (
        <motion.div className="relative w-48 h-48" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
            <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" fill="none" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(2,132,199,0.1)"} strokeWidth="12" />
                <motion.circle
                    cx="96" cy="96" r="88" fill="none" stroke="url(#scoreGradientDashboard)" strokeWidth="12" strokeLinecap="round"
                    strokeDasharray={553} initial={{ strokeDashoffset: 553 }} animate={{ strokeDashoffset: 553 - (553 * score) / 100 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                />
                <defs>
                    <linearGradient id="scoreGradientDashboard" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={isDark ? "#00d9ff" : "#0284C7"} />
                        <stop offset="100%" stopColor={isDark ? "#00ff88" : "#0EA5E9"} />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span className={`text-5xl font-black bg-gradient-to-r ${getScoreColor(score)} bg-clip-text text-transparent`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    {score}
                </motion.span>
                <span className={`text-xs font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>{getScoreLabel(score)}</span>
            </div>
        </motion.div>
    );
}

function WeatherIcon({ code, isDay, className = "w-16 h-16" }: { code: number; isDay: boolean; className?: string }) {
    const type = getWeatherIcon(code, isDay);
    if (type === "sunny") return <svg className={`${className} text-yellow-400`} fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><g stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></g></svg>;
    if (type === "cloudy") return <svg className={`${className} text-gray-400`} fill="currentColor" viewBox="0 0 24 24"><path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" /></svg>;
    if (type === "rainy") return <svg className={`${className} text-blue-400`} fill="currentColor" viewBox="0 0 24 24"><path d="M4 10a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 9.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" /><line x1="8" y1="15" x2="8" y2="19" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="14" x2="12" y2="20" stroke="currentColor" strokeWidth="2" /></svg>;
    return <svg className={`${className} text-gray-400`} fill="currentColor" viewBox="0 0 24 24"><path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" /></svg>;
}

function CollapsibleCard({ title, buttonText, children, isDark }: { title: string; buttonText: string; children: React.ReactNode; isDark: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`glass-card rounded-3xl p-6 transition-all duration-300 ${isOpen ? 'ring-2 ring-cyan-500/20' : ''}`}>
            <div className="flex items-center justify-between mb-2">
                <h3 className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-sky-950'}`}>{title}</h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-cyan-400' : 'bg-sky-50 hover:bg-sky-100 text-sky-600'
                        }`}
                >
                    {isOpen ? "Sluiten" : buttonText}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className={`pt-4 text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function CityDashboardClient({ weather, cityInfo }: CityDashboardClientProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const currentHour = new Date().getHours();
    const isPrecipitating = checkIfPrecipitating(weather.current.weatherCode);
    const verdict = getDryingVerdict(weather.dryingScore, isPrecipitating);

    const now = new Date();
    const upcomingHours = weather.hourly.filter((h: HourlyForecast) => {
        const date = new Date(h.time);
        return date >= now;
    }).slice(0, 12);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
                <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
            </div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                        <h1 className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-white/40' : 'text-sky-800/40'}`}>
                            Kan ik vandaag de was buiten hangen in {cityInfo.name}?
                        </h1>

                        {verdict && (
                            <>
                                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
                                    <div className={`text-6xl sm:text-8xl leading-none font-black tracking-tighter mb-4 ${verdict.color} drop-shadow-2xl`}>
                                        {verdict.title}
                                    </div>
                                </motion.div>
                                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={`text-xl sm:text-2xl font-bold max-w-3xl mx-auto leading-tight mb-8 ${isDark ? 'text-white/80' : 'text-sky-900/80'}`}>
                                    {verdict.subtitle}
                                </motion.p>
                            </>
                        )}
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col gap-6 h-full">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <h2 className={`text-3xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>{cityInfo.name}</h2>
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-bold ${isDark ? 'bg-white/5 text-white/80' : 'bg-sky-50 text-sky-800'}`}>
                                    <WeatherIcon code={weather.current.weatherCode} isDay={weather.current.isDayTime} className="w-6 h-6" />
                                    <span>{getWeatherDescription(weather.current.weatherCode)}</span>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }} className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center flex-1">
                                <DryingScoreGauge score={weather.dryingScore} isDark={isDark} />
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 h-full">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {/* Temperature Tile */}
                                <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-orange-400 to-red-500' : 'bg-gradient-to-br from-orange-300 to-red-400'}`} />
                                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`}>Temperatuur</div>
                                    <div className="flex items-center gap-2">
                                        <svg className={`w-8 h-8 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
                                        </svg>
                                        <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.current.temperature}°</div>
                                    </div>
                                </div>

                                {/* Humidity Tile */}
                                <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-cyan-300 to-blue-400'}`} />
                                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`}>Vochtigheid</div>
                                    <div className="flex items-center gap-2">
                                        <svg className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.5c-3.12 4.28-7 9.6-7 13.5 0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.9-3.88-9.22-7-13.5z" />
                                        </svg>
                                        <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.current.humidity}%</div>
                                    </div>
                                </div>

                                {/* Wind Tile */}
                                <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-emerald-400 to-green-500' : 'bg-gradient-to-br from-emerald-300 to-green-400'}`} />
                                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`}>Wind</div>
                                    <div className="flex items-center gap-2">
                                        <svg className={`w-8 h-8 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.current.windSpeed}</div>
                                        <span className={`text-sm font-bold mt-2 ${isDark ? 'text-white/40' : 'text-sky-900/40'}`}>km/u</span>
                                    </div>
                                </div>

                                {/* UV Index Tile */}
                                <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-yellow-400 to-amber-500' : 'bg-gradient-to-br from-yellow-300 to-amber-400'}`} />
                                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`}>UV Index</div>
                                    <div className="flex items-center gap-2">
                                        <svg className={`w-8 h-8 ${isDark ? 'text-yellow-400' : 'text-amber-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.current.uvIndex}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                        <CollapsibleCard title="Waarom deze score?" buttonText="Waarom doet het weer zo?" isDark={isDark}>
                            {cityInfo.isCoastal ? (
                                <>
                                    <p className="mb-4">{cityInfo.name} ligt dicht bij de kust, wat betekent dat de zeewind een enorme bondgenoot is bij het drogen van je was. Wind is vaak effectiever dan pure zonkracht om vocht uit vezels te trekken.</p>
                                    <p>Houd er echter rekening mee dat de luchtvochtigheid hier aan zee vaak hoger ligt. Dit spel tussen wind en water maakt dat je was soms sneller droogt op een bewolkte, winderige dag dan op een klamme, zonnige middag. Een typisch staaltje kust-logica.</p>
                                </>
                            ) : (
                                <>
                                    <p className="mb-4">In {cityInfo.name} zijn temperatuur en zonkracht vaak de belangrijkste motoren voor je was. Zonder de constante zeebries moet de warmte het zware werk doen om het vocht te laten verdampen.</p>
                                    <p>Omdat de wind hier wat wisselvalliger kan zijn, is het slim om je was buiten te hangen zodra de zon doorbreekt. De droogscore houdt hier rekening met de balans tussen warmte en luchtverplaatsing, zodat je niet voor verrassingen komt te staan.</p>
                                </>
                            )}
                        </CollapsibleCard>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-black">Blijft het zo?</h2>
                            <span className="text-xs font-bold opacity-40">Komende 12 uur</span>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-12">
                            {upcomingHours.map((hour, i) => {
                                const time = new Date(hour.time);
                                const isNow = time.getHours() === currentHour;

                                // Calculate window color & label
                                let statusColor = "";
                                let statusLabel = "";
                                let statusTextColor = "";

                                if (hour.snowfall > 0) {
                                    statusColor = isDark ? 'border-blue-300/80 bg-blue-300/10' : 'border-blue-300 bg-blue-50';
                                    statusLabel = "Sneeuw";
                                    statusTextColor = isDark ? "text-blue-200" : "text-blue-600";
                                } else if (hour.rain > 0 || hour.precipitation > 0) {
                                    statusColor = isDark ? 'border-red-500/80 bg-red-500/10' : 'border-red-500 bg-red-50';
                                    statusLabel = "Regen";
                                    statusTextColor = isDark ? "text-red-400" : "text-red-600";
                                } else if (hour.precipitationProbability >= 60) {
                                    statusColor = isDark ? 'border-orange-500/80 bg-orange-500/10' : 'border-orange-500 bg-orange-50';
                                    statusLabel = "Kans regen";
                                    statusTextColor = isDark ? "text-orange-400" : "text-orange-600";
                                } else if (hour.dryingScore >= 60) {
                                    statusColor = isDark ? 'border-emerald-500/80 bg-emerald-500/10' : 'border-emerald-500 bg-emerald-50';
                                    statusLabel = "Goed";
                                    statusTextColor = isDark ? "text-emerald-400" : "text-emerald-600";
                                } else if (hour.dryingScore >= 40) {
                                    statusColor = isDark ? 'border-yellow-500/80 bg-yellow-500/10' : 'border-yellow-500 bg-yellow-50';
                                    statusLabel = "Matig";
                                    statusTextColor = isDark ? "text-yellow-400" : "text-yellow-600";
                                } else {
                                    statusColor = isDark ? 'border-red-500/80 bg-red-500/10' : 'border-red-500 bg-red-50';
                                    statusLabel = "Slecht";
                                    statusTextColor = isDark ? "text-red-400" : "text-red-600";
                                }

                                return (
                                    <motion.div key={hour.time} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.05 }}
                                        className={`glass-card rounded-2xl p-3 text-center border-2 flex flex-col items-center justify-between ${statusColor} ${isNow ? 'scale-110 shadow-lg z-10' : ''}`}>
                                        <p className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                            {new Date(hour.time).getHours()}:00
                                        </p>
                                        <div className="flex justify-center my-2">
                                            <img
                                                src={`https://raw.githubusercontent.com/basmilius/weather-icons/master/production/fill/all/${getWeatherIcon(hour.weatherCode, hour.isDayTime)}.svg`}
                                                alt={getWeatherDescription(hour.weatherCode)}
                                                className={`w-10 h-10 ${!isDark ? 'brightness-[0.6] contrast-125 drop-shadow-sm' : ''}`}
                                            />
                                        </div>
                                        <p className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{Math.round(hour.temperature)}°</p>
                                        <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusTextColor} bg-white/10 border ${isDark ? 'border-white/10' : 'border-black/5'} w-full uppercase`}>
                                            {statusLabel}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
                        <CollapsibleCard title={`Wanneer hang je best buiten in ${cityInfo.name}?`} buttonText="Geef me het droogmoment" isDark={isDark}>
                            <p className="mb-4">Timing is de sleutel tot succes. In de vroege ochtend is de luchtvochtigheid vaak nog hoog door opgetrokken dauw, waardoor je was urenlang stilhangt. Voor de beste resultaten raden we aan om rond het middaguur te beginnen.</p>
                            <p>In de middag bereik je vaak het optimale punt waar temperatuur en wind het best samenwerken. Zodra de avond valt, stijgt de luchtvochtigheid weer snel. Check onze uurbalk hierboven om te zien wanneer de score in de &quot;Goed&quot; zone zit—dat is jouw moment om te stralen met die wasmand.</p>
                        </CollapsibleCard>
                    </motion.div>

                    {verdict && <div className="mb-12"><AffiliateGrid products={getProductsForCategory(verdict.verdict)} title={`${verdictCopy[verdict.verdict].transition} Dit helpt:`} /></div>}

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-center">
                        <h3 className="text-lg font-black tracking-tight mb-6">Andere plekken om hoop te zoeken</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {cityInfo.nearbyCities.map((city) => (
                                <Link key={city.slug} href={`/kan-de-was-buiten-hangen/${city.slug}`} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-cyan-500/50' : 'bg-white border border-sky-100 text-sky-900/70 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300'}`}>
                                    {city.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
