'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });

export default function Header() {
  return (
    // A flex-col garantálja, hogy a sávok pontosan egymás alá kerülnek
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col shadow-2xl">
      
      {/* 1. AZ ARANY VIP SÁV (40px magas) */}
      <div className="w-full h-[40px] relative overflow-hidden flex items-center border-b border-black/10">
        {/* Animált háttér */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFF5D1] to-[#D4AF37] bg-[length:200%_auto] animate-[goldShine_6s_infinite_linear]"></div>
        
        {/* Szöveges tartalom */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-10 grid grid-cols-3 items-center">
          
          <div className="text-left">
            <span className={`${masculineFont.className} text-black text-[10px] uppercase tracking-[0.4em] font-black`}>
              Nezu VIP Program
            </span>
          </div>

          <div className="text-center">
            <span className={`${masculineFont.className} text-black text-[10px] uppercase tracking-[0.15em] font-black`}>
              Belépés csak Tagoknak!
            </span>
          </div>

          <div className="text-right flex items-center justify-end gap-3">
            <span className={`${masculineFont.className} text-black/80 text-[9px] uppercase tracking-wider font-bold`}>
              Szeretnél VIP tag lenni?
            </span>
            <button className={`${masculineFont.className} bg-black text-[#D4AF37] text-[9px] px-3 py-1 rounded-sm font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all shadow-md`}>
              Kattints ide
            </button>
          </div>

        </div>
      </div>

      {/* 2. A FEKETE MENÜ (Pontosan az arany sáv alatt indul) */}
      <nav className="w-full bg-black py-4">
        <div className="max-w-[1600px] mx-auto px-10 flex justify-between items-center">
          
          {/* IDE ILLESZD VISSZA A SAJÁT LOGÓDAT ÉS A MENÜPONTJAIDAT */}
          
          <div className="text-[#D4AF37] font-black text-2xl tracking-tighter italic">
            Nezu.hu
          </div>
          
          <div className="flex gap-6 text-white text-xs uppercase font-bold tracking-widest">
            {/* Példa menüpontok, cseréld a sajátodra */}
            <span>Kategóriák</span>
            <span>Újdonságok</span>
          </div>

          <div className="flex gap-4 text-white">
             {/* Keresés, Profil, Kosár ikonok */}
             <span>🔍</span>
             <span>👤</span>
             <span>🛒</span>
          </div>

        </div>
      </nav>

    </header>
  );
}
