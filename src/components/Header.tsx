'use client'; // Ez kell, mert interakciót (kattintást) adunk hozzá

import { useState } from 'react';
import { Search, Menu, Percent, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50">
      {/* ARANY BANNER */}
      <div className="bg-[#D4AF37] text-black text-[10px] py-1 text-center font-bold uppercase tracking-[0.2em]">
        Nezu Protocol - Member Access Only
      </div>

      <header className="bg-black border-b border-gray-800">
        {/* LOGO ÉS KERESŐ - Marad a régi */}
        <div className="flex items-center justify-between px-4 py-3 gap-4">
          <div className="text-2xl font-black italic tracking-tighter">NEZU</div>
          <div className="flex-1 relative">
            <input type="text" placeholder="Keresés..." className="w-full bg-[#1a1a1a] border border-gray-700 py-1.5 px-10 text-sm rounded-sm focus:outline-none focus:border-green-600" />
            <Search className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
          </div>
        </div>

        {/* MENÜSOR */}
        <nav className="flex items-center gap-4 px-4 py-2 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] uppercase font-medium border-t border-gray-900 relative">
          
          {/* 1. Kategóriák Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 font-bold border-r border-gray-800 pr-3 transition-colors hover:text-green-500"
            >
              <Menu size={14} /> Kategóriák <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* A tényleges lenyíló rész */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 shadow-2xl z-[60]">
                <ul className="py-2 text-[10px]">
                  <li className="px-4 py-2 hover:bg-zinc-900 cursor-pointer border-b border-gray-900">Minden termék</li>
                  <li className="px-4 py-2 hover:bg-zinc-900 cursor-pointer border-b border-gray-900">Bestsellerek</li>
                  <li className="px-4 py-2 hover:bg-zinc-900 cursor-pointer">Újdonságok</li>
                </ul>
              </div>
            )}
          </div>

          {/* ... A többi menüpont (Gyerekruházat, stb.) marad változatlan ... */}
          <a href="#" className="hover:text-gray-400">Gyerekruházat</a>
          <a href="#" className="hover:text-gray-400">Otthon és lakberendezés</a>
          <div className="flex items-center gap-1">
            <a href="#" className="hover:text-gray-400">Pet Shop</a>
            <span className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" title="ALA Entry Point">🐾</span>
          </div>
          <a href="#" className="hover:text-gray-400 border-l border-gray-800 pl-3">BBQ & Whiskey</a>
          <a href="#" className="text-red-500 font-bold flex items-center gap-0.5">Kiárusítás <Percent size={12} /></a>
        </nav>
      </header>
    </div>
  );
}
