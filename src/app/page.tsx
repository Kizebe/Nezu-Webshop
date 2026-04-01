'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Betűtípusok stabil konfigurálása - EGYSZERI DEFINÍCIÓ
const feminineFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['italic'] });
const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });

export default function Home() {
  const games = [
    { name: 'Nezu-Unit', status: 'Tamagotchi' },
    { name: 'Snake', status: 'XP+' },
    { name: 'Útvesztő', status: 'Maze' },
    { name: 'Rituálék', status: 'Secret' },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative text-zinc-900">
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.9; }
          50% { opacity: 1; }
          100% { background-position: 200% center; opacity: 0.9; }
        }
        .animate-gold-vip {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 6s infinite linear;
        }

        /* 🎯 SEBÉSZI ILLESZKEDÉS: A fekete menü (Header) hajszálpontosan az arany sáv alatt kezdődik */
        header, [class*="fixed top-0"] {
          top: 40px !important; 
          height: 80px !important; 
        }
      `}</style>

      {/* 1. VIP ARANY SÁV - Fix 40px magasság (h-10) */}
      <div className="fixed top-0 left-0 w-full h-10 z-[150] animate-gold-vip flex items-center shadow-sm">
        <div className="max-w-[1600px] mx-auto w-full px-10 grid grid-cols-3 items-center">
            
            {/* BAL OLDAL */}
            <div className="text-left">
              <span className={`${masculineFont.className} text-black text-[9px] uppercase tracking-[0.4em] font-black`}>
                Nezu VIP Program
              </span>
            </div>

            {/* KÖZÉP */}
            <div className="text-center">
              <span className={`${masculineFont.className} text-black text-[9px] uppercase tracking-[0.15em] font-black`}>
                Belépés csak Tagoknak!
              </span>
            </div>

            {/* JOBB OLDAL */}
            <div className="text-right flex items-center justify-end gap-3">
              <span className={`${masculineFont.className} text-black/70 text-[8px] uppercase tracking-wider font-bold`}>
                Szeretnél VIP tag lenni?
              </span>
              <button className={`${masculineFont.className} bg-black text-[#D4AF37] text-[8px] px-2.5 py-1 rounded-sm font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all shadow-md`}>
                Kattints ide
              </button>
            </div>

        </div>
      </div>

      {/* 2. FEKETE MENÜ - Résmentesen az arany sáv alá kényszerítve */}
      <Header />

      {/* 3. HERO BANNER */}
      <section className="w-full bg-white pt-12 pb-16 border-b border-zinc-50 relative">
        <div className="max-w-[1550px] mx-auto px-12 flex flex-row items-center justify-between h-[220px] md:h-[260px]">
          
          <div className="flex-[1.2] pl-20 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block italic">Pure & Effective</span>
            <h1 className={`${feminineFont.className} text-4xl md:text-[4.2rem] text-zinc-900 leading-[1.05] mb-7 italic`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center">
              <button className="bg-black text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok Begyűjtése
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center pr-12 scale-90">
            <div className="w-full max-w-[460px] bg-gradient-to-br from-purple-700 to-pink-500 p-8 rounded-[50px] shadow-2xl relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl italic tracking-tighter uppercase mb-2`}>
                  Nezu Játékbarlang
                </h2>
                <p className="text-white/60 text-[8px] uppercase tracking-widest mb-5 font-bold text-center">
                  Enyészet: Aktív • Szinted: Kezdő
                </p>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {games.map((game, i) => (
                    <button 
                      key={i}
                      className="bg-black
