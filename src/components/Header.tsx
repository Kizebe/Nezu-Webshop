'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col shadow-2xl">
      
      {/* 1. MEGNÖVELT ARANY VIP SÁV (Fix 40px magasság) */}
      <div className="w-full h-10 animate-gold-vip flex items-center border-b border-black/5 relative z-[101]">
        <div className="max-w-[1600px] mx-auto w-full px-10 grid grid-cols-3 items-center">
          
          {/* BAL OLDAL */}
          <div className="text-left">
            <span className={`${masculineFont.className} text-black text-[10px] uppercase tracking-[0.4em] font-black`}>
              Nezu VIP Program
            </span>
          </div>

          {/* KÖZÉP */}
          <div className="text-center">
            <span className={`${masculineFont.className} text-black text-[10px] uppercase tracking-[0.15em] font-black`}>
              Belépés csak Tagoknak!
            </span>
          </div>

          {/* JOBB OLDAL */}
          <div className="text-right flex items-center justify-end gap-3">
            <span className={`${masculineFont.className} text-black/70 text-[9px] uppercase tracking-wider font-bold`}>
              Szeretnél VIP tag lenni?
            </span>
            <button className={`${masculineFont.className} bg-black text-[#D4AF37] text-[9px] px-3 py-1 rounded-sm font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all shadow-md`}>
              Kattints ide
            </button>
          </div>

        </div>
      </div>

      {/* 2. KIDOLGOZOTT FEKETE MENÜSÁV (Érintetlen belső tartalommal) */}
      <nav className="w-full bg-black py-4 relative z-[100]">
        <div className="max-w-[1600px] mx-auto px-10 flex justify-between items-center">
          
          {/* LOGÓ */}
          <Link href="/" className="text-white font-black text-2xl tracking-tighter italic hover:opacity-80 transition-opacity">
            Nezu.hu
          </Link>

          {/* MENÜPONTOK (A korábban kidolgozott kategóriák) */}
          <div className="hidden md:flex items-center gap-10">
            {['Gyerekruházat', 'Otthon', 'BBQ', 'Whiskey', 'Kiegészítők'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className={`${masculineFont.className} text-white/90 text-[11px] uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* IKONOK */}
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-[#D4AF37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <button className="text-white hover:text-[#D4AF37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="
