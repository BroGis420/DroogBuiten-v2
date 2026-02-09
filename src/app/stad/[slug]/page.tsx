"use client";

import { useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fetchWeatherData, getWeatherDescription, getWeatherIcon, type WeatherData } from "@/lib/weather";
import { useTheme } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getDryingVerdict, checkIfRaining } from "@/lib/drying-logic";

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

  const isRaining = weather ? checkIfRaining(weather.current.weatherCode) : false;
  const verdict = weather ? getDryingVerdict(weather.dryingScore, isRaining) : null;

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

  // Determine the next 12 hours from current time
  // We now fetch 48 hours of data (2 days), so we can safely slice the next 12 hours check day boundaries
  const now = new Date();
  const upcomingHours = weather.hourly.filter(h => {
    const date = new Date(h.time);
    return date >= now;
  }).slice(0, 12);

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
            {verdict && (
              <>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <h1 className={`text-6xl sm:text-8xl leading-none font-black tracking-tighter mb-4 ${verdict.color} drop-shadow-2xl`}>
                    {verdict.title}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`text-xl sm:text-2xl font-bold max-w-3xl mx-auto leading-tight mb-8 ${isDark ? 'text-white/80' : 'text-sky-900/80'}`}
                >
                  {verdict.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/60 border border-sky-100'} backdrop-blur-md`}
                >
                  <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-sky-900'}`}>{weather.city}</span>
                  <span className={isDark ? 'text-white/20' : 'text-sky-300'}>|</span>
                  <div className={`flex items-center gap-2 ${isDark ? 'text-white/70' : 'text-sky-700'}`}>
                    <WeatherIcon code={weather.current.weatherCode} isDay={weather.current.isDayTime} />
                    <span className="font-medium">{getWeatherDescription(weather.current.weatherCode)}</span>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 flex flex-col items-center">
              <span className={`text-xs font-bold uppercase tracking-wider mb-6 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Droogscore</span>
              <DryingScoreGauge score={weather.dryingScore} isDark={isDark} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 h-full">
              <div className="grid grid-cols-2 gap-4 h-full">

                {/* Temperature Tile */}
                <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-orange-400 to-red-500' : 'bg-gradient-to-br from-orange-300 to-red-400'}`} />
                  <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`}>Temperatuur</div>
                  <div className="flex items-center gap-2">
                    <svg className={`w-8 h-8 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" style={{ display: 'none' }} />
                      {/* Using a simple thermometer-like icon or generic temp icon if available, otherwise generic */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13V5a3 3 0 00-6 0v8a5 5 0 106 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2" />
                    </svg>
                    <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{weather.current.temperature}°</div>
                  </div>
                </div>

                {/* Humidity Tile */}
                <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-cyan-300 to-blue-400'}`} />
                  <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`}>Vochtigheid</div>
                  <div className="flex items-center gap-2">
                    <svg className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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

                    <div className="flex items-center justify-center gap-1 mt-2">
                      <svg className={`w-3 h-3 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />
                      </svg>
                      <span className={`text-[10px] font-bold ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>{hour.humidity}%</span>
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
