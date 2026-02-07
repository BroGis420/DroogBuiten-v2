"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  TShirtIcon,
  JacketIcon,
  WoolIcon,
  JeansIcon,
  ShirtIcon,
  SilkIcon,
  TowelIcon,
  BedIcon,
  SunIcon,
  CloudSunIcon,
  CloudIcon,
  WindIcon,
  DropletIcon,
  CalculatorIcon,
  ThermometerIcon,
  LightbulbIcon,
  AlertIcon,
} from "@/components/Icons";

interface FabricType {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  baseDryTime: number;
  description: string;
}

const fabricTypes: FabricType[] = [
  { id: "cotton", name: "Katoen", icon: TShirtIcon, baseDryTime: 180, description: "T-shirts, handdoeken, lakens" },
  { id: "synthetic", name: "Synthetisch", icon: JacketIcon, baseDryTime: 90, description: "Polyester, nylon, sportkleding" },
  { id: "wool", name: "Wol", icon: WoolIcon, baseDryTime: 480, description: "Truien, dekens, sjaals" },
  { id: "denim", name: "Denim", icon: JeansIcon, baseDryTime: 300, description: "Jeans, spijkerjassen" },
  { id: "linen", name: "Linnen", icon: ShirtIcon, baseDryTime: 150, description: "Overhemden, tafelkleden" },
  { id: "silk", name: "Zijde", icon: SilkIcon, baseDryTime: 120, description: "Blouses, sjaals, lingerie" },
  { id: "towels", name: "Handdoeken", icon: TowelIcon, baseDryTime: 240, description: "Bad- en keukenhanddoeken" },
  { id: "bedding", name: "Beddengoed", icon: BedIcon, baseDryTime: 360, description: "Lakens, dekbedovertrekken" },
];

interface WeatherCondition {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  multiplier: number;
}

const weatherConditions: WeatherCondition[] = [
  { id: "sunny", name: "Zonnig", icon: SunIcon, multiplier: 0.7 },
  { id: "partly-cloudy", name: "Gedeeltelijk Bewolkt", icon: CloudSunIcon, multiplier: 0.85 },
  { id: "cloudy", name: "Bewolkt", icon: CloudIcon, multiplier: 1.0 },
  { id: "windy", name: "Winderig", icon: WindIcon, multiplier: 0.6 },
  { id: "humid", name: "Vochtig", icon: DropletIcon, multiplier: 1.4 },
];

const temperatures = [
  { id: "cold", name: "Koud (<10°C)", multiplier: 1.5 },
  { id: "mild", name: "Mild (10-20°C)", multiplier: 1.0 },
  { id: "warm", name: "Warm (20-25°C)", multiplier: 0.8 },
  { id: "hot", name: "Heet (>25°C)", multiplier: 0.6 },
];

export default function CalculatorPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string>("partly-cloudy");
  const [selectedTemp, setSelectedTemp] = useState<string>("mild");
  const [quantity, setQuantity] = useState<number>(1);
  const [dryingTime, setDryingTime] = useState<number | null>(null);

  useEffect(() => {
    if (selectedFabric) {
      const fabric = fabricTypes.find(f => f.id === selectedFabric);
      const weather = weatherConditions.find(w => w.id === selectedWeather);
      const temp = temperatures.find(t => t.id === selectedTemp);

      if (fabric && weather && temp) {
        const baseTime = fabric.baseDryTime;
        const adjustedTime = baseTime * weather.multiplier * temp.multiplier;
        const quantityAdjusted = adjustedTime * (1 + (quantity - 1) * 0.15);
        setDryingTime(Math.round(quantityAdjusted));
      }
    }
  }, [selectedFabric, selectedWeather, selectedTemp, quantity]);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} minuten`;
    if (mins === 0) return `${hours} uur`;
    return `${hours} uur ${mins} min`;
  };

  const selectedFabricData = fabricTypes.find(f => f.id === selectedFabric);
  const selectedWeatherData = weatherConditions.find(w => w.id === selectedWeather);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
        <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
        <div className={`absolute -bottom-32 left-1/3 w-80 h-80 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-purple-500/10' : 'bg-white/25'}`} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b ${isDark ? 'bg-black/30 border-white/5' : 'bg-white/50 border-sky-200/50'}`}>
        <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className={`flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-bold transition-all group ${isDark ? 'hover:bg-white/10' : 'hover:bg-white/70'}`}>
            <svg className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className={isDark ? 'text-white' : 'text-sky-900'}>Home</span>
          </Link>
          <Link href="/" className="text-2xl font-black tracking-tighter">
            <span className={isDark ? 'text-white' : 'text-sky-900'}>DroogWeerVandaag</span><span className="animate-text-shimmer">.nl</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <CalculatorIcon className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-sky-700'}`}>Droogtijd Berekenen</span>
            </div>
            <h1 className={`text-4xl sm:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-sky-950'}`}>
              Hoelang duurt het <span className="animate-text-shimmer">drogen?</span>
            </h1>
            <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              Selecteer je stofsoort en weersomstandigheden om een schatting te krijgen van de droogtijd.
            </p>
          </motion.div>

          {/* Calculator Grid */}
          <div className="space-y-8">
            {/* Fabric Selection */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-3xl p-6">
              <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-sky-500/20 text-sky-600'}`}>1</span>
                Kies je stofsoort
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {fabricTypes.map((fabric) => {
                  const IconComponent = fabric.icon;
                  return (
                    <button
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric.id)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedFabric === fabric.id
                          ? isDark ? "border-cyan-500 bg-cyan-500/10" : "border-sky-500 bg-sky-500/10"
                          : isDark ? "border-white/10 hover:border-white/30 hover:bg-white/5" : "border-sky-200 hover:border-sky-400 hover:bg-white/50"
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 mb-2 ${selectedFabric === fabric.id ? (isDark ? 'text-cyan-400' : 'text-sky-600') : (isDark ? 'text-white/60' : 'text-sky-700/60')}`} />
                      <span className={`font-bold block ${isDark ? 'text-white' : 'text-sky-900'}`}>{fabric.name}</span>
                      <span className={`text-xs ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>{fabric.description}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Weather Selection */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-6">
              <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-sky-500/20 text-sky-600'}`}>2</span>
                Weersomstandigheden
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {weatherConditions.map((weather) => {
                  const IconComponent = weather.icon;
                  return (
                    <button
                      key={weather.id}
                      onClick={() => setSelectedWeather(weather.id)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                        selectedWeather === weather.id
                          ? isDark ? "border-emerald-500 bg-emerald-500/10" : "border-sky-500 bg-sky-500/10"
                          : isDark ? "border-white/10 hover:border-white/30 hover:bg-white/5" : "border-sky-200 hover:border-sky-400 hover:bg-white/50"
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 mx-auto mb-2 ${selectedWeather === weather.id ? (isDark ? 'text-emerald-400' : 'text-sky-600') : (isDark ? 'text-white/60' : 'text-sky-700/60')}`} />
                      <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-sky-900'}`}>{weather.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Temperature Selection */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-3xl p-6">
              <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-sky-500/20 text-sky-600'}`}>3</span>
                Temperatuur
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {temperatures.map((temp) => (
                  <button
                    key={temp.id}
                    onClick={() => setSelectedTemp(temp.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                      selectedTemp === temp.id
                        ? "border-yellow-500 bg-yellow-500/10"
                        : isDark ? "border-white/10 hover:border-white/30 hover:bg-white/5" : "border-sky-200 hover:border-sky-400 hover:bg-white/50"
                    }`}
                  >
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-sky-900'}`}>{temp.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-3xl p-6">
              <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-sky-500/20 text-sky-600'}`}>4</span>
                Hoeveelheid
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center text-2xl font-bold ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-sky-100 hover:bg-sky-200 text-sky-900'}`}
                >
                  -
                </button>
                <div className="flex-1 text-center">
                  <span className={`text-4xl font-black ${isDark ? 'text-white' : 'text-sky-950'}`}>{quantity}</span>
                  <span className={`block text-sm ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>stuks</span>
                </div>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center text-2xl font-bold ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-sky-100 hover:bg-sky-200 text-sky-900'}`}
                >
                  +
                </button>
              </div>
            </motion.div>

            {/* Result */}
            {dryingTime && selectedFabricData && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`glass-card rounded-3xl p-8 text-center border ${isDark ? 'bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-cyan-500/30' : 'bg-gradient-to-r from-sky-500/10 to-sky-400/10 border-sky-500/30'}`}
              >
                <h2 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Geschatte Droogtijd</h2>
                <div className={`text-6xl font-black mb-4 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                  {formatTime(dryingTime)}
                </div>
                <p className={isDark ? 'text-white/60' : 'text-sky-800/70'}>
                  Voor {quantity} {quantity === 1 ? "stuk" : "stuks"} {selectedFabricData.name.toLowerCase()}
                </p>
                <div className={`mt-6 pt-6 border-t grid grid-cols-3 gap-4 text-sm ${isDark ? 'border-white/10' : 'border-sky-200'}`}>
                  <div className="flex flex-col items-center">
                    {selectedWeatherData && <selectedWeatherData.icon className={`w-6 h-6 mb-1 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`} />}
                    <span className={isDark ? 'text-white/50' : 'text-sky-700/60'}>{selectedWeatherData?.name}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ThermometerIcon className={`w-6 h-6 mb-1 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`} />
                    <span className={isDark ? 'text-white/50' : 'text-sky-700/60'}>{temperatures.find(t => t.id === selectedTemp)?.name}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <selectedFabricData.icon className={`w-6 h-6 mb-1 ${isDark ? 'text-white/60' : 'text-sky-700/60'}`} />
                    <span className={isDark ? 'text-white/50' : 'text-sky-700/60'}>{selectedFabricData.name}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tips */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-2xl p-4">
                <LightbulbIcon className={`w-6 h-6 mb-2 ${isDark ? 'text-yellow-400' : 'text-amber-500'}`} />
                <h3 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-sky-900'}`}>Tip</h3>
                <p className={`text-xs ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>Hang kleding met ruimte ertussen voor betere luchtcirculatie</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <AlertIcon className={`w-6 h-6 mb-2 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
                <h3 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-sky-900'}`}>Let op</h3>
                <p className={`text-xs ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>Donkere kleuren binnenstebuiten hangen tegen verkleuren</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <WindIcon className={`w-6 h-6 mb-2 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} />
                <h3 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-sky-900'}`}>Wind</h3>
                <p className={`text-xs ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>Lichte wind kan de droogtijd met 30% verkorten</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
