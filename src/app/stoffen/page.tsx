"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FabricIcon,
  ArrowLeftIcon,
} from "@/components/Icons";

interface Fabric {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  dryingTime: string;
  tips: string[];
  doNot: string[];
  idealConditions: string;
  color: string;
}

const fabrics: Fabric[] = [
  {
    id: "cotton",
    name: "Katoen",
    icon: TShirtIcon,
    description: "Katoen is een natuurlijke vezel die veel vocht kan absorberen. Het is duurzaam en kan goed tegen hoge temperaturen.",
    dryingTime: "2-4 uur",
    tips: [
      "Schud kleding goed uit voor het ophangen",
      "Hang op een kledinghaakje voor minder kreukels",
      "Kan in direct zonlicht drogen",
    ],
    doNot: [
      "Niet te lang in de zon laten (kan verkleuren)",
      "Voorkom opslaglokaties met hoge vochtigheid",
    ],
    idealConditions: "Zonnig weer, 20-25°C, lichte wind",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "synthetic",
    name: "Synthetisch",
    icon: JacketIcon,
    description: "Synthetische stoffen zoals polyester en nylon drogen snel en zijn kreukbestendig. Ideaal voor sportkleding.",
    dryingTime: "1-2 uur",
    tips: [
      "Droogt zeer snel dankzij lage vochtopname",
      "Kan ook binnen goed drogen",
      "Weinig onderhoud nodig",
    ],
    doNot: [
      "Niet in direct zonlicht (kan beschadigen)",
      "Vermijd hoge temperaturen in de droger",
    ],
    idealConditions: "Bewolkt weer, 15-25°C",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "wool",
    name: "Wol",
    icon: WoolIcon,
    description: "Wol is een delicate natuurlijke vezel die speciale zorg nodig heeft. Het isoleert goed en is ademend.",
    dryingTime: "6-12 uur",
    tips: [
      "Altijd liggend drogen om uitrekken te voorkomen",
      "Gebruik een droogrek met vlakke ondergrond",
      "Vermijd direct zonlicht",
    ],
    doNot: [
      "Nooit ophangen aan een waslijn",
      "Niet wringen of uitknijpen",
      "Niet in de droger",
    ],
    idealConditions: "Schaduw, 15-20°C, goede ventilatie",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "denim",
    name: "Denim",
    icon: JeansIcon,
    description: "Denim is stevig katoenen weefsel. Het duurt langer om te drogen vanwege de dikte, maar is zeer duurzaam.",
    dryingTime: "4-6 uur",
    tips: [
      "Binnenstebuiten ophangen",
      "Aan de tailleband ophangen",
      "Kan goed tegen zon en wind",
    ],
    doNot: [
      "Niet in direct zonlicht voor donkere jeans",
      "Voorkom vouwen bij het ophangen",
    ],
    idealConditions: "Zonnig en winderig, 18-25°C",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "linen",
    name: "Linnen",
    icon: ShirtIcon,
    description: "Linnen is een lichte, ademende stof die snel droogt. Perfect voor warme zomerdagen.",
    dryingTime: "1.5-3 uur",
    tips: [
      "Droogt zeer snel",
      "Ophangen terwijl nog vochtig vermindert kreukels",
      "Ideaal voor buiten drogen",
    ],
    doNot: [
      "Niet te droog laten worden (moeilijk te strijken)",
      "Vermijd te hoge temperaturen",
    ],
    idealConditions: "Warm weer, 20-30°C, lichte bries",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "silk",
    name: "Zijde",
    icon: SilkIcon,
    description: "Zijde is een luxe natuurlijke vezel die delicate behandeling nodig heeft. Zeer glad en glanzend.",
    dryingTime: "1-2 uur",
    tips: [
      "Altijd in de schaduw drogen",
      "Gebruik gewatteerde hangers",
      "Vermijd knijpers op de stof",
    ],
    doNot: [
      "Nooit in direct zonlicht",
      "Niet wringen",
      "Niet in de droger",
    ],
    idealConditions: "Binnen of schaduw, 18-22°C",
    color: "from-rose-500 to-pink-500",
  },
];

export default function StoffenPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
  const activeFabric = fabrics.find(f => f.id === selectedFabric);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
        <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
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
          <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter">
            <span className={isDark ? 'text-white' : 'text-sky-900'}>DroogWeerVandaag</span><span className="animate-text-shimmer">.nl</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <FabricIcon className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-sky-700'}`}>Stoffen Gids</span>
            </div>
            <h1 className={`text-4xl sm:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-sky-950'}`}>
              Leer over <span className="animate-text-shimmer">stoffen</span>
            </h1>
            <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              Elke stof heeft unieke eigenschappen. Leer hoe je ze het beste kunt drogen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Fabric List */}
            <div className="lg:col-span-1 space-y-3">
              {fabrics.map((fabric, index) => {
                const IconComponent = fabric.icon;
                return (
                  <motion.button
                    key={fabric.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedFabric(fabric.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 ${selectedFabric === fabric.id
                      ? isDark ? "glass-card border-2 border-cyan-500/50" : "glass-card border-2 border-sky-500/50"
                      : isDark ? "bg-white/5 hover:bg-white/10 border-2 border-transparent" : "bg-white/50 hover:bg-white/70 border-2 border-transparent"
                      }`}
                  >
                    <IconComponent className={`w-10 h-10 ${selectedFabric === fabric.id ? (isDark ? 'text-cyan-400' : 'text-sky-600') : (isDark ? 'text-white/60' : 'text-sky-700/60')}`} />
                    <div>
                      <span className={`font-bold block ${isDark ? 'text-white' : 'text-sky-900'}`}>{fabric.name}</span>
                      <span className={`text-sm ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>{fabric.dryingTime}</span>
                    </div>
                    <svg className={`w-5 h-5 ml-auto transition-transform ${selectedFabric === fabric.id ? "rotate-90" : ""} ${selectedFabric === fabric.id ? (isDark ? "text-cyan-400" : "text-sky-600") : (isDark ? "text-white/30" : "text-sky-400")}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                );
              })}
            </div>

            {/* Fabric Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {activeFabric ? (
                  <motion.div
                    key={activeFabric.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="glass-card rounded-3xl p-8"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                      <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center bg-gradient-to-br shadow-xl ${activeFabric.color} group-hover:scale-110 transition-transform duration-500`}>
                        <activeFabric.icon className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h2 className={`text-4xl sm:text-5xl font-black tracking-tighter mb-2 ${isDark ? 'text-white' : 'text-sky-950'}`}>
                          {activeFabric.name}
                        </h2>
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${isDark ? 'bg-white/10 border border-white/5' : 'bg-sky-50 border border-sky-100'}`}>
                          <span className={`${isDark ? 'text-cyan-400' : 'text-sky-600'} text-xs font-black uppercase tracking-widest`}>Gemiddelde droogtijd:</span>
                          <span className={`${isDark ? 'text-white' : 'text-sky-900'} text-xs font-black`}>{activeFabric.dryingTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description Tile */}
                    <div className={`glass-card rounded-2xl p-6 mb-6 ${isDark ? 'bg-white/5 border-white/5' : 'bg-white/40 border-sky-100'}`}>
                      <p className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-sky-900/80'}`}>
                        {activeFabric.description}
                      </p>
                    </div>

                    {/* Conditions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Ideal Conditions */}
                      <div className={`glass-card rounded-2xl p-6 border-2 flex flex-col items-center text-center ${isDark ? 'border-cyan-500/20 bg-cyan-500/5' : 'border-sky-200 bg-sky-50'}`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-sky-100 text-sky-600'}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0A9 9 0 115.636 5.636a9 9 0 0112.728 12.728z" />
                          </svg>
                        </div>
                        <h3 className={`font-black uppercase tracking-widest text-[10px] mb-2 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Ideale Omstandigheden</h3>
                        <p className={`font-bold ${isDark ? 'text-white' : 'text-sky-950'}`}>{activeFabric.idealConditions}</p>
                      </div>

                      {/* Drying Score Reference? No, let's keep it simple with Tips title */}
                      <div className={`glass-card rounded-2xl p-6 border-2 flex flex-col items-center text-center ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50/30'}`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className={`font-black uppercase tracking-widest text-[10px] mb-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Pro Tip</h3>
                        <p className={`font-bold ${isDark ? 'text-white' : 'text-sky-950'}`}>{activeFabric.tips[0]}</p>
                      </div>
                    </div>

                    {/* Do's & Don'ts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Do's */}
                      <div className={`glass-card rounded-2xl p-6 border ${isDark ? 'border-white/5 bg-white/5' : 'bg-white/60 border-sky-100'}`}>
                        <h3 className={`font-black uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isDark ? 'bg-emerald-400/20' : 'bg-emerald-100'}`}>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          </div>
                          Zeker Doen
                        </h3>
                        <ul className="space-y-3">
                          {activeFabric.tips.map((tip, i) => (
                            <li key={i} className={`text-sm flex items-start gap-2 font-medium ${isDark ? 'text-white/70' : 'text-sky-800'}`}>
                              <span className={isDark ? 'text-emerald-400/50' : 'text-emerald-400'}>•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Don'ts */}
                      <div className={`glass-card rounded-2xl p-6 border ${isDark ? 'border-white/5 bg-white/5' : 'bg-white/60 border-sky-100'}`}>
                        <h3 className={`font-black uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isDark ? 'bg-red-400/20' : 'bg-red-100'}`}>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                          </div>
                          Beter Niet
                        </h3>
                        <ul className="space-y-3">
                          {activeFabric.doNot.map((item, i) => (
                            <li key={i} className={`text-sm flex items-start gap-2 font-medium ${isDark ? 'text-white/70' : 'text-sky-800'}`}>
                              <span className={isDark ? 'text-red-400/50' : 'text-red-400'}>•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/calculator?fabric=${activeFabric.id}`}
                      className={`mt-8 w-full p-4 rounded-3xl text-center block transition-all duration-300 font-black uppercase tracking-[0.2em] text-[11px] hover:scale-[1.02] active:scale-95 shadow-xl ${isDark
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-cyan-500/20'
                        : 'bg-gradient-to-r from-sky-500 to-sky-400 text-white shadow-sky-500/20'
                        }`}
                    >
                      Check Droogscore voor {activeFabric.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-card rounded-3xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                  >
                    <ArrowLeftIcon className={`w-16 h-16 mb-4 ${isDark ? 'text-white/30' : 'text-sky-300'}`} />
                    <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-sky-900'}`}>Selecteer een stofsoort</h2>
                    <p className={isDark ? 'text-white/50' : 'text-sky-700/60'}>Klik op een stof om meer informatie te zien</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
