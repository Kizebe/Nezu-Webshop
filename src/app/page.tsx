'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Betűtípusok stabil konfigurálása
const feminineFont = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  style: ['italic', 'normal'] 
});

const masculineFont = Montserrat({ 
  subsets: ['latin'], 
  weight: ['700', '900'] 
});

export default function Home() {
  return (
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative">
      {/* ANIMÁCIÓ: Arany csillogás a legfelső sávhoz */}
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.8; }
          50% { opacity: 1; }
          100% { background-position: 200% center; opacity: 0.8; }
        }
        .animate-gold-shine {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 3s infinite linear;
        }
      `}</style>

      <Header />

      {/* 1. LEGÜLSŐ ARANY SÁV - Pulzáló fényjelenség */}
      <div className="w-full h-[4px] animate-gold-shine shadow-[0_5px_25px_rgba(212,175,55,0.4)] relative z-50"></div>

      {/* 2. HERO BANNER - 20%-al kisebb szekció, +15% nagyobb főcímmel */}
      <section className="w-full bg-white pt-10 pb-12 border-b border-zinc-50 relative">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[220px] md:h-[260px]">
          
          {/* BAL OLDAL - Apró örömök (pl-32 behúzás marad) */}
          <div className="flex-[1.4] pl-32 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block italic text-center">Exkluzív Válogatás</span>
            <h1 className={`${feminineFont.className} text-4xl md:text-[3.8rem] text-zinc-900 leading-[1.05] mb-5 italic text-center`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center mt-6">
              <button className="bg-black text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok begyűjtése
              </button>
            </div>
          </div>

          {/* ⚡ ALA TRIGGER (Rejtett) ⚡ */}
          <div className="w-4 h-4 opacity-0 pointer-events-none select-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Eredeti stílus, 20% kisebb) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[280px] bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-10 rounded-[45px] shadow-2xl transform hover:scale-105 transition-all cursor-pointer relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl md:text-4xl italic tracking-tighter uppercase mb-1 leading-tight`}>
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-10 bg-white/40 my-4"></div>
                <div className="inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  Belépés
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TERMÉKRÁCS - Montserrat (Maszkulin) karakterrel */}
      <section className="max-w-[1600px] mx-auto px-6 py-12 bg-white">
        {/* Szekciófejléc - Diszkrét, szisztematikus */}
        <div className="flex items-center justify-between mb-16 px-10">
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
            <h2 className={`${masculineFont.className} text-[11px] uppercase tracking-[0.5em] text-
