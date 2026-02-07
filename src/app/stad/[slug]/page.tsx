"use client";

import { useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fetchWeatherData, getWeatherDescription, getWeatherIcon, type WeatherData } from "@/lib/weather";
import { useTheme } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";

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
          cx="96" cy="96" r="88" fill="none" stroke="url(#scoreGradient)" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={553} initial={{ strokeDashoffset: 553 }} animate={{ strokeDashoffset: 553 - (553 * score) / 100 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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

function WeatherIcon({ code, isDay }: { code: number; isDay: boolean }) {
  const type = getWeatherIcon(code, isDay);
  if (type === "sunny") return <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><g stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></g></svg>;
  if (type === "cloudy") return <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" /></svg>;
  if (type === "rainy") return <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 10a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 9.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" /><line x1="8" y1="15" x2="8" y2="19" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="14" x2="12" y2="20" stroke="currentColor" strokeWidth="2" /></svg>;
  return <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" /></svg>;
}

export default function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const currentHour = new Date().getHours();

  useEffect(() => {
    async function loadWeather() {
      const data = await fetchWeatherData(resolvedParams.slug);
      setWeather(data);
      setLoading(false);
    }
    loadWeather();
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className={`w-16 h-16 border-4 border-t-transparent rounded-full animate-spin ${isDark ? 'border-cyan-500' : 'border-sky-500'}`} />
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-sky-900'}`}>Stad niet gevonden</h1>
        <Link href="/" className={isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-600 hover:text-sky-500'}>Terug naar home</Link>
      </div>
    );
  }

  const upcomingHours = weather.hourly.filter((h) => new Date(h.time).getHours() >= currentHour).slice(0, 12);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
        <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
      </div>

      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b ${isDark ? 'bg-black/30 border-white/5' : 'bg-white/50 border-sky-200/50'}`}>
        <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className={`flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-bold transition-all group ${isDark ? 'hover:bg-white/10' : 'hover:bg-white/70'}`}>
            <svg className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className={isDark ? 'text-white' : 'text-sky-900'}>Terug</span>
          </Link>
          <Link href="/" className="text-2xl font-black tracking-tighter">
            <span className={isDark ? 'text-white' : 'text-sky-900'}>DroogWeerVandaag</span><span className="animate-text-shimmer">.nl</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-emerald-400' : 'bg-sky-500'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/50' : 'text-sky-700/70'}`}>Live Weerdata</span>
            </div>
            <h1 className={`text-5xl sm:text-7xl font-black tracking-tighter mb-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.city}</h1>
            <p className={`text-xl flex items-center gap-3 ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              <WeatherIcon code={weather.current.weatherCode} isDay={weather.current.isDayTime} />
              {getWeatherDescription(weather.current.weatherCode)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 flex flex-col items-center">
              <span className={`text-xs font-bold uppercase tracking-wider mb-6 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Droogscore</span>
              <DryingScoreGauge score={weather.dryingScore} isDark={isDark} />
              <p className={`text-sm text-center mt-6 ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>{weather.recommendation}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass-card rounded-3xl p-8">
              <span className={`text-xs font-bold uppercase tracking-wider mb-6 block ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Huidige Condities</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.current.temperature}°</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Temperatuur</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-black ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>{weather.current.humidity}%</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Vochtigheid</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-black ${isDark ? 'text-emerald-400' : 'text-sky-500'}`}>{weather.current.windSpeed}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Wind km/u</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">{weather.current.uvIndex}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>UV Index</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>Uurlijkse Voorspelling</h2>
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Komende 12 uur</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
              {upcomingHours.map((hour, i) => {
                const time = new Date(hour.time);
                const isNow = time.getHours() === currentHour;
                return (
                  <motion.div key={hour.time} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.05 }}
                    className={`glass-card rounded-2xl p-3 text-center ${isNow ? (isDark ? 'ring-2 ring-cyan-500/50' : 'ring-2 ring-sky-500/50') : ''}`}>
                    <div className={`text-xs font-bold mb-1 ${isDark ? 'text-white/70' : 'text-sky-800/80'}`}>{time.getHours()}:00</div>
                    <div className={`text-xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{hour.temperature}°</div>
                    <div className={`text-[10px] ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>{hour.humidity}%</div>
                    <div className={`h-1 rounded-full mt-2 overflow-hidden ${isDark ? 'bg-white/10' : 'bg-sky-200'}`}>
                      <motion.div className={`h-full ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-gradient-to-r from-sky-500 to-sky-400'}`} initial={{ width: 0 }} animate={{ width: `${hour.dryingScore}%` }} transition={{ delay: 0.8 + i * 0.05 }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
