'use client';

import { useState } from 'react';
import { 
  Search, Menu, Percent, ChevronDown, 
  User, Heart, ShoppingBag, Headset 
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 bg-black">
      {/* ARANY BANNER */}
      <div className="bg-[#D4AF37] text-black text-[10px] py-1 text-center font-bold uppercase tracking-[0.2em]">
        Nezu Protocol - Member Access Only
      </div>

      <header className="border-b border-gray-800">
        {/* FELSŐ SOR: Logo, Kereső, Funkciók */}
        <div className="flex items-center justify-between px-6 py-4 gap-8">
          
          {/* LOGO - Kétszer akkora (text-4xl) */}
          <div className="text-4xl font-black italic tracking-tighter whitespace-nowrap">
            Nezu.hu
          </div>
          
          {/* KERESŐ - Nem teljes szélességű (max-w-md), kis hellyel a logó után */}
          <div className="flex-1 max-w-xl relative ml-4">
            <input 
              type="text" 
              placeholder="Keresés..." 
              className="w-full bg-[#1a1a1a] border border-gray-700 py-2 px-10 text-sm rounded-sm focus:outline-none focus:border-green-600"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
          </div>

          {/* FUNKCIÓ IKONOK (Shein stílus) */}
          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <User size={20} />
              <span className="text-[9px] mt-1">Belépés</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <Heart size={20} />
              <span className="text-[9px] mt-1">Kedvencek</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white relative">
              <ShoppingBag size={20} />
              <span className="text-[9px] mt-1">Kosár</span>
              <span className="absolute -top-1 -right-1 bg-green-600 text-[8px] px-1 rounded-full text-white font-bold">0</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <Headset size={20} />
              <span className="text-[9px] mt-1">Kapcsolat</span>
            </div>
          </div>
        </div>

        {/* MENÜSOR: Teljes szélesség, +10% betűméret, egyenlő távolság */}
        <nav className="flex items-center justify-between px-8 py-3 overflow-x-auto no-scrollbar whitespace-nowrap text-[12.5px] uppercase font-bold border-t border-gray-900">
          
          {/* 1. Kategóriák Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 transition-colors hover:text-green-500"
            >
              <Menu size={16} /> Kategóriák <ChevronDown size={14} className={isOpen ? 'rotate-180' : ''} />
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-black border border-gray-800 shadow-2xl z-[60]">
                <ul className="py-2 text-[11px]">
                  <li className="px-4 py-3 hover:bg-zinc-900 border-b border-gray-900">Minden termék</li>
                  <li className="px-4 py-3 hover:bg-zinc-900 border-b border-gray-900">Bestsellerek</li>
                  <li className="px-4 py-3 hover:bg-zinc-900">Újdonságok</li>
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-green-500">Gyerekruházat</a>
          <a href="#" className="hover:text-green-500">Otthon és lakberendezés</a>
          
          <div className="flex items-center gap-1 group cursor-pointer">
            <a href="#" className="group-hover:text-green-500 transition-colors">Pet Shop</a>
            <span className="text-sm opacity-70 group-hover:opacity-100">🐾</span>
          </div>

          <a href="#" className="hover:text-green-500">BBQ & Whiskey esszenciák</a>
          
          <a href="#" className="text-red-500 flex items-center gap-1">
            Kiárusítás <Percent size={14} />
          </a>
        </nav>

        {/* Játék a kedvezményekért sáv */}
        <div className="bg-[#0a0a0a] border-t border-green-900/10 py-1 text-center">
          <a href="/game" className="text-[10px] text-green-500 tracking-[0.4em] font-bold animate-pulse uppercase">
            ⚡ Játék a kedvezményekért ⚡
          </a>
        </div>
      </header>
    </div>
  );
}
