'use client';

import { Montserrat } from 'next/font/google';

const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* 1. MEGNÖVELT ARANY VIP SÁV (40px) */}
      <div className="w-full h-10 animate-gold-vip flex items-center shadow-md border-b border-black/10">
        <div className="max-w-[1600px] mx-auto w-full px-10 grid grid-cols-3 items-center">
          
          <div className="text-left">
            <span className={`${masculineFont.className} text-black text-[9px] uppercase tracking-[0.4em] font-black`}>
              Nezu VIP Program
            </span>
          </div>

          <div className="text-center">
            <span className={`${masculineFont.className} text-black text-[9px] uppercase tracking-[0.15em] font-black`}>
              Belépés csak Tagoknak!
            </span>
          </div>

          <div className="text-right flex items-center justify-end gap-3">
            <span className={`${masculineFont.className} text-black/70 text-[8px] uppercase tracking-wider font-bold`}>
              Szeretnél VIP tag lenni?
            </span>
            <button className="bg-black text-[#D4AF37] text-[8px] px-2.5 py-1 rounded-sm font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all">
              Kattints ide
            </button>
          </div>
        </div>
      </div>

      {/* 2. FEKETE MENÜSOR - Adunk neki egy 2px GAP-et (margin-top), hogy ne érjenek össze */}
      <nav className="bg-black w-full py-4 mt-[2px] shadow-xl">
        {/* Itt van a logód és a menüpontjaid... */}
        <div className="max-w-[1600px] mx-auto px-10 flex justify-between items-center">
           {/* ... a meglévő menü kódod ... */}
        </div>
      </nav>
    </header>
  );
}
