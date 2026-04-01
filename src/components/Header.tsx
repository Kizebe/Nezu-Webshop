'use client';

import { Montserrat } from 'next/font/google';

const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col">
      {/* MEGNÖVELT ARANY SÁV - 44px magas, ide kerül a szöveg */}
      <div className="w-full h-11 animate-gold-vip flex items-center shadow-md border-b border-black/5">
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

      {/* FEKETE NAVIGÁCIÓ - Pontosan az arany sáv alá illeszkedik, nulla rálógás */}
      <nav className="bg-black w-full py-5 shadow-2xl">
        <div className="max-w-[1600px] mx-auto px-10 flex justify-between items-center">
          {/* Itt a logód (Nezu.hu) és a menüpontjaid... */}
          <div className="text-white font-black text-2xl tracking-tighter italic">Nezu.hu</div>
          {/* ...többi menüelem... */}
        </div>
      </nav>
    </header>
  );
}
