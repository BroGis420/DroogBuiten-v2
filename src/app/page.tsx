"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { dutchCities, allDutchPlaces, fetchAllCitiesWeather, getWeatherIcon } from "@/lib/weather";
import { useTheme } from "@/lib/theme";
import { ThemeToggle, ThemeToggleCompact } from "@/components/ThemeToggle";

// Weather icon component
function WeatherIcon({ type }: { type: string }) {
  if (type === "sunny" || type === "clear-night") {
    return (
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "cloudy" || type === "partly-cloudy") {
    return (
      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" />
      </svg>
    );
  }
  if (type === "rainy" || type === "drizzle") {
    return (
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 10a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 9.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" />
        <line x1="8" y1="14" x2="8" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="15" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" />
    </svg>
  );
}

// Stars for night mode
function NightParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Clouds for day mode
function DayParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/40 rounded-full blur-xl animate-cloud"
          style={{
            left: `${10 + i * 20}%`,
            top: `${10 + Math.random() * 30}%`,
            width: `${100 + Math.random() * 100}px`,
            height: `${40 + Math.random() * 30}px`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Sun rays for day mode
function SunRays() {
  const rays = Array.from({ length: 12 }).map((_, i) => ({
    angle: (i * 30) - 60, // Spread rays from -60 to 270 degrees
    delay: i * 0.3,
    length: 200 + Math.random() * 150,
  }));

  return (
    <div className="fixed top-0 right-0 pointer-events-none z-0">
      {/* Sun glow */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full animate-sun-glow"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(251,191,36,0.1) 40%, transparent 70%)',
        }}
      />

      {/* Sun core */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full animate-sun-glow"
        style={{
          background: 'radial-gradient(circle, rgba(253,224,71,0.6) 0%, rgba(251,191,36,0.3) 50%, transparent 70%)',
        }}
      />

      {/* Rays */}
      {rays.map((ray, i) => (
        <div
          key={i}
          className="absolute origin-top animate-sun-ray"
          style={{
            top: '10px',
            right: '10px',
            width: '3px',
            height: `${ray.length}px`,
            background: 'linear-gradient(to bottom, rgba(253,224,71,0.5), rgba(251,191,36,0.2) 30%, transparent)',
            '--ray-angle': `${ray.angle}deg`,
            transform: `rotate(${ray.angle}deg)`,
            animationDelay: `${ray.delay}s`,
            borderRadius: '2px',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

// Get unique provinces sorted
const provinces = [...new Set(allDutchPlaces.map(p => p.province))].sort();

interface CityWeather {
  slug: string;
  name: string;
  temperature: number;
  humidity: number;
  dryingScore: number;
  weatherCode: number;
  isDayTime: boolean;
}

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [saveLocation, setSaveLocation] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    fetchAllCitiesWeather().then((data) => {
      setCitiesWeather(data);
      setLoadingWeather(false);
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPlaces = searchValue.length > 0
    ? allDutchPlaces.filter((place) =>
        place.name.toLowerCase().includes(searchValue.toLowerCase())
      ).slice(0, 10)
    : [];

  const handleSelectPlace = (slug: string) => {
    setShowDropdown(false);
    setSearchValue("");
    router.push(`/stad/${slug}`);
  };

  const handleSearch = () => {
    if (filteredPlaces.length > 0) {
      handleSelectPlace(filteredPlaces[0].slug);
    }
  };

  // Get places for selected province
  const provincePlaces = selectedProvince
    ? allDutchPlaces.filter(p => p.province === selectedProvince).sort((a, b) => a.name.localeCompare(b.name))
    : [];

  const avgTemp = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a, b) => a + b.temperature, 0) / citiesWeather.length)
    : 0;
  const avgHumidity = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a, b) => a + b.humidity, 0) / citiesWeather.length)
    : 0;
  const avgDryingScore = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a, b) => a + b.dryingScore, 0) / citiesWeather.length)
    : 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Theme-specific particles */}
      {mounted && (
        isDark ? <NightParticles /> : (
          <>
            <DayParticles />
            <SunRays />
          </>
        )
      )}

      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
        <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
        <div className={`absolute -bottom-32 left-1/3 w-80 h-80 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-purple-500/10' : 'bg-white/25'}`} style={{ animationDelay: '5s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${isDark ? 'bg-black/30 border-white/5' : 'bg-white/50 border-sky-200/50'}`}>
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-3 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-white/50'}`}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter group relative">
              <span className={`absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20'}`} />
              <span className={`relative transition-all duration-300 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-900 group-hover:text-sky-600'}`}>DroogWeerVandaag</span>
              <span className="relative animate-text-shimmer">.nl</span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/over-ons" className={`px-6 py-2.5 rounded-full glass-card text-xs font-bold uppercase tracking-widest transition-all duration-300 group relative overflow-hidden ${isDark ? 'text-white' : 'text-sky-800'}`}>
                <span className="relative z-10">Over Ons</span>
                <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20'}`} />
              </Link>
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

      {/* Main Content */}
      <main className="relative z-10 pt-32 sm:pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[70vh]">
            {/* Left Column - Hero Text */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Floating weather badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
              >
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-emerald-400' : 'bg-amber-500'}`} />
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-sky-700'}`}>
                  {loadingWeather ? "Laden..." : `Droogscore: ${avgDryingScore}%`}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8"
              >
                <span className={`block ${isDark ? 'text-white' : 'text-sky-950'}`}>Kan ik mijn</span>
                <span className={`block ${isDark ? 'text-white' : 'text-sky-950'}`}>was buiten</span>
                <span className={`block ${isDark ? 'text-white' : 'text-sky-950'}`}>drogen</span>
                <span className="block animate-text-shimmer">vandaag?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`font-medium text-xl sm:text-2xl mb-12 max-w-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}
              >
                Een wetenschappelijke wasdroogvoorspeller voor het moderne huishouden. Stop met gissen, begin met drogen.
              </motion.p>

              {/* Search Input with Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-lg"
                ref={searchRef}
              >
                <div className="relative group">
                  <div className={`absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-gradient ${isDark ? 'bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400'}`} />
                  <div className="relative">
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                        setShowDropdown(e.target.value.length > 0);
                      }}
                      onFocus={() => searchValue.length > 0 && setShowDropdown(true)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      placeholder="Voer Stad of Gemeente in..."
                      className="w-full px-8 py-6 rounded-2xl modern-input text-lg font-medium outline-none"
                    />
                    <button
                      onClick={handleSearch}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/30' : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-lg hover:shadow-amber-500/30'}`}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {showDropdown && filteredPlaces.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 rounded-2xl glass-card overflow-hidden z-50"
                      >
                        {filteredPlaces.map((place, index) => (
                          <motion.button
                            key={place.slug}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleSelectPlace(place.slug)}
                            className={`w-full px-6 py-4 flex items-center justify-between transition-colors last:border-0 group ${isDark ? 'hover:bg-white/10 border-b border-white/5' : 'hover:bg-sky-100 border-b border-sky-100'}`}
                          >
                            <div className="flex items-center gap-3">
                              <svg className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                              </svg>
                              <div className="text-left">
                                <span className={`font-bold block ${isDark ? 'text-white' : 'text-sky-900'}`}>{place.name}</span>
                                <span className={`text-xs ${isDark ? 'text-white/40' : 'text-sky-600/60'}`}>{place.province}</span>
                              </div>
                            </div>
                            <svg className={`w-4 h-4 group-hover:translate-x-1 transition-all ${isDark ? 'text-white/30 group-hover:text-cyan-400' : 'text-sky-300 group-hover:text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Options */}
                <div className="flex items-center justify-center lg:justify-start gap-8 mt-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={saveLocation}
                        onChange={() => setSaveLocation(!saveLocation)}
                        className="sr-only peer"
                      />
                      <div className={`w-5 h-5 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${isDark ? 'border-white/30 peer-checked:border-cyan-500 peer-checked:bg-cyan-500' : 'border-sky-300 peer-checked:border-sky-500 peer-checked:bg-sky-500'} ${saveLocation ? (isDark ? 'border-cyan-500 bg-cyan-500' : 'border-sky-500 bg-sky-500') : ''}`}>
                        {saveLocation && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${isDark ? 'text-white/50 group-hover:text-white/80' : 'text-sky-700/70 group-hover:text-sky-800'}`}>Thuislocatie Opslaan</span>
                  </label>

                  <button className={`font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-600 hover:text-sky-500'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    GPS Gebruiken
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - City Cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {(citiesWeather.length > 0 ? citiesWeather : dutchCities.map(c => ({ ...c, temperature: 0, humidity: 0, dryingScore: 0, weatherCode: 0, isDayTime: true }))).map((city, index) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      href={`/stad/${city.slug}`}
                      className="group p-6 sm:p-8 glass-card rounded-3xl text-left overflow-hidden relative block"
                    >
                      {/* Hover gradient */}
                      <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/10' : 'bg-gradient-to-br from-sky-400/0 to-sky-300/0 group-hover:from-sky-400/10 group-hover:to-sky-300/10'}`} />

                      {/* Weather indicator */}
                      <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        {!loadingWeather && <WeatherIcon type={getWeatherIcon(city.weatherCode, city.isDayTime)} />}
                      </div>

                      <div className="relative z-10">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isDark ? 'text-white/40 group-hover:text-cyan-400' : 'text-sky-700/60 group-hover:text-sky-600'}`}>
                          {loadingWeather ? "Laden..." : `${city.dryingScore}% droogscore`}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-black mt-2 transition-colors duration-300 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-950 group-hover:text-sky-700'}`}>
                          {city.name}
                        </h3>

                        {!loadingWeather && (
                          <div className={`flex items-center gap-3 mt-2 text-sm ${isDark ? 'text-white/50' : 'text-sky-700/70'}`}>
                            <span>{city.temperature}°C</span>
                            <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/30' : 'bg-sky-400/50'}`} />
                            <span>{city.humidity}%</span>
                          </div>
                        )}

                        {/* Arrow indicator */}
                        <div className={`absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${isDark ? 'bg-white/5' : 'bg-sky-100'}`}>
                          <svg className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 p-4 glass-card rounded-2xl flex items-center justify-around"
              >
                <div className="text-center">
                  <div className={`text-2xl font-black ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>{loadingWeather ? "--" : `${avgTemp}°C`}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Gem. Temp</div>
                </div>
                <div className={`w-px h-10 ${isDark ? 'bg-white/10' : 'bg-sky-200'}`} />
                <div className="text-center">
                  <div className={`text-2xl font-black ${isDark ? 'text-emerald-400' : 'text-sky-500'}`}>{loadingWeather ? "--" : `${avgHumidity}%`}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Vochtigheid</div>
                </div>
                <div className={`w-px h-10 ${isDark ? 'bg-white/10' : 'bg-sky-200'}`} />
                <div className="text-center">
                  <div className={`text-2xl font-black ${isDark ? 'text-yellow-400' : 'text-amber-500'}`}>{loadingWeather ? "--" : `${avgDryingScore}%`}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>Droogscore</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Browse All Locations Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-24"
          >
            <div className="text-center mb-8">
              <h2 className={`text-3xl sm:text-4xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                Alle {allDutchPlaces.length}+ <span className="animate-text-shimmer">locaties</span>
              </h2>
              <p className={`max-w-xl mx-auto ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
                Selecteer je provincie en vind je gemeente. Weer is lokaal, dus kies de dichtstbijzijnde plaats voor de meest accurate voorspelling.
              </p>
            </div>

            {/* Province Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {provinces.map((province) => (
                <button
                  key={province}
                  onClick={() => setSelectedProvince(selectedProvince === province ? null : province)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    selectedProvince === province
                      ? isDark
                        ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black"
                        : "bg-gradient-to-r from-sky-500 to-sky-400 text-white"
                      : isDark
                        ? "glass-card text-white/70 hover:text-white hover:bg-white/10"
                        : "bg-white/70 text-sky-800 hover:bg-white border border-sky-200"
                  }`}
                >
                  {province}
                </button>
              ))}
            </div>

            {/* Places Grid */}
            <AnimatePresence mode="wait">
              {selectedProvince && (
                <motion.div
                  key={selectedProvince}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass-card rounded-3xl p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>
                      {selectedProvince}
                      <span className={`ml-2 text-sm font-normal ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>
                        ({provincePlaces.length} plaatsen)
                      </span>
                    </h3>
                    <button
                      onClick={() => setSelectedProvince(null)}
                      className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-white/50 hover:text-white' : 'hover:bg-sky-100 text-sky-600'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {provincePlaces.map((place, index) => (
                      <motion.div
                        key={place.slug}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.02 }}
                      >
                        <Link
                          href={`/stad/${place.slug}`}
                          className={`block p-4 rounded-xl text-center transition-all duration-300 group ${
                            isDark
                              ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50"
                              : "bg-white/50 hover:bg-white border border-sky-100 hover:border-sky-300"
                          }`}
                        >
                          <span className={`font-bold text-sm block truncate ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-900 group-hover:text-sky-600'}`}>
                            {place.name}
                          </span>
                          <span className={`text-xs ${isDark ? 'text-white/40' : 'text-sky-600/60'}`}>
                            Bekijk score
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Show all locations toggle when no province is selected */}
            {!selectedProvince && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllLocations(!showAllLocations)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    isDark
                      ? "glass-card text-white/70 hover:text-white hover:bg-white/10"
                      : "bg-white/70 text-sky-800 hover:bg-white border border-sky-200"
                  }`}
                >
                  {showAllLocations ? "Verberg alle locaties" : "Bekijk alle locaties alfabetisch"}
                  <svg
                    className={`w-4 h-4 ml-2 inline-block transition-transform ${showAllLocations ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {showAllLocations && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 glass-card rounded-3xl p-6 sm:p-8 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                        {[...allDutchPlaces].sort((a, b) => a.name.localeCompare(b.name)).map((place) => (
                          <Link
                            key={place.slug}
                            href={`/stad/${place.slug}`}
                            className={`p-2 rounded-lg text-center text-sm transition-all duration-200 truncate ${
                              isDark
                                ? "hover:bg-white/10 text-white/70 hover:text-cyan-400"
                                : "hover:bg-sky-100 text-sky-800 hover:text-sky-600"
                            }`}
                          >
                            {place.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t mt-20 ${isDark ? 'border-white/5' : 'border-sky-200/50'}`}>
        <div className="container mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-4 space-y-6">
              <h3 className="text-xl font-black tracking-tighter">
                <span className={isDark ? 'text-white' : 'text-sky-950'}>DroogWeerVandaag</span>
                <span className="animate-text-shimmer">.nl</span>
              </h3>
              <p className={`text-xs font-medium uppercase tracking-widest leading-relaxed ${isDark ? 'text-white/40' : 'text-sky-800/60'}`}>
                Vooruitgang in waswetenschappen door precisie atmosferische fysica. Beter voor je kleren, beter voor de planeet.
              </p>

              {/* Animated dots */}
              <div className="flex gap-3">
                <div className={`w-2 h-2 rounded-full animate-pulse-glow ${isDark ? 'bg-cyan-500' : 'bg-sky-500'}`} />
                <div className={`w-2 h-2 rounded-full animate-pulse-glow delay-200 ${isDark ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                <div className={`w-2 h-2 rounded-full animate-pulse-glow delay-400 ${isDark ? 'bg-purple-500' : 'bg-sky-300'}`} />
              </div>
            </div>

            {/* App Tools */}
            <div className="md:col-span-3 space-y-6">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>App Tools</span>
              <nav className="space-y-4">
                <Link href="/" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Weervoorspellingen
                </Link>
                <Link href="/calculator" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Droogtijd Calculator
                </Link>
                <Link href="/stoffen" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Stoffen Bibliotheek
                </Link>
              </nav>
            </div>

            {/* Support */}
            <div className="md:col-span-3 space-y-6">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Ondersteuning</span>
              <nav className="space-y-4">
                <Link href="/over-ons" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Over het Project
                </Link>
              </nav>
            </div>

            {/* Visual Element */}
            <div className="md:col-span-2 flex justify-end">
              <div className="relative w-24 h-24">
                <div className={`absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse-glow ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-gradient-to-r from-sky-400 to-sky-300'}`} />
                <div className={`absolute inset-4 rounded-full opacity-20 animate-float ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-gradient-to-r from-sky-400 to-sky-300'}`} />
                <div className={`absolute inset-8 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-white/50'}`}>
                  <svg className={`w-4 h-4 ${isDark ? 'text-white/50' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t ${isDark ? 'border-white/5' : 'border-sky-200/50'}`}>
            <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isDark ? 'text-white/30' : 'text-sky-700/50'}`}>
              © 2026 DroogWeerVandaag.nl - Alle Rechten Voorbehouden
            </p>
            <div className="flex gap-8">
              <a href="#" className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-white/30 hover:text-cyan-400' : 'text-sky-700/50 hover:text-sky-600'}`}>
                LinkedIn
              </a>
              <a href="#" className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-white/30 hover:text-cyan-400' : 'text-sky-700/50 hover:text-sky-600'}`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-lg z-[200]"
          >
            <div className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className={`text-sm font-medium text-center sm:text-left ${isDark ? 'text-white/80' : 'text-sky-800'}`}>
                We gebruiken anonieme analytics om de app te verbeteren. Akkoord?
              </span>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-sky-100 hover:bg-sky-200 text-sky-800'}`}
                >
                  Nee, bedankt
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black' : 'bg-gradient-to-r from-sky-500 to-sky-400 text-white'}`}
                >
                  Accepteren
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
