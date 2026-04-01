'use client';

import { useState } from 'react';
import { 
  Search, Menu,
  Percent, ChevronDown, 
  User, Heart,
  ShoppingBag, Headset,
  Crown 
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Gyerekruházat', href: '#' },
    { name: 'Otthon és lakberendezés', href: '#' },
    { name: 'Pet Shop', href: '#', icon: '🐾' },
    { name: 'BBQ & Whiskey esszenciák', href: '#' },
    { name: 'Ajándéktárgyak', href: '#' },
    { name: 'Kiárusítás', href: '#', isSale: true },
  ];

  return (
    <div className="w-full fixed top-0 z-50 bg-black">
      
      {/* 1. VIP SÁV */}
      <div className="bg-[#D4AF37] w-full py-2 flex items-center">
        {/* ITT A MÓDOSÍTÁS: px-[5cm] a két szélén lévő 5-5 cm margóért, a grid-cols-3 pedig szimmetrikusan elosztja a maradékot */}
        <div className="max-w-[1600px] mx-auto w-full px-[5cm] grid grid-cols-3 items-center">
          
          <div className="text-left">
            <span className="text-black text-[10px] uppercase tracking-[0.4em] font-black">
              Nezu VIP Program
            </span>
          </div>

          <div className="text-center flex justify-center">
            <button className="flex items-center justify-center gap-1.5 text-black text-[10px] uppercase tracking-[0.15em] font-black transition-all duration-300 hover:text-[#FFFDD0] hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,253,208,0.8)] focus:outline-none">
              <span>Belépés csak Tagoknak!</span>
              <Crown size={12} className="shrink-0" />
            </button>
          </div>

          <div className="text-right flex items-center justify-end gap-3">
            <span className="text-black/80 text-[9px] uppercase tracking-wider font-bold">
              Szeretnél VIP tag lenni?
            </span>
            <button className="bg-black text-[#D4AF37] text-[9px] px-3 py-1 rounded-sm font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all shadow-md">
              Kattints ide
            </button>
          </div>

        </div>
      </div>

      <header className="border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4 gap-8">
          <div className="text-4xl font-black italic tracking-tighter whitespace-nowrap text-white">
            Nezu.hu
          </div>
          
          <div className="flex-1 max-w-xl relative ml-4">
            <input 
             type="text" 
             placeholder="Keresés..." 
             className="w-full bg-[#1a1a1a] border border-gray-700 py-2 px-10 text-sm rounded-sm focus:outline-none focus:border-green-600 text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
          </div>

          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <User size={20} />
              <span className="text-[9px] mt-1 font-bold uppercase">Belépés</span>
           </div>
           <div className="flex flex-col items-center cursor-pointer hover:text-white relative">
             <ShoppingBag size={20} />
              <span className="text-[9px] mt-1 font-bold uppercase">Kosár</span>
              <span className="absolute -top-1 -right-1 bg-green-600 text-[8px] px-1 rounded-full text-white font-bold">0</span>
           </div>
           <div className="flex flex-col items-center cursor-pointer hover:text-white">
             <Headset size={20} />
              <span className="text-[9px] mt-1 font-bold uppercase">Kapcsolat</span>
           </div>
          </div>
        </div>

        {/* A JAVÍTOTT NAV SÁV (overflow-visible az 'auto' helyett) */}
        <nav className="flex items-center justify-between px-8 py-3 whitespace-nowrap text-[12.5px] uppercase font-bold border-t border-gray-900 bg-black relative overflow-visible">
          
          <div className="relative">
            <button
             onClick={() => setIsOpen(!isOpen)}
             className="flex items-center gap-2 transition-colors hover:text-green-500 text-white"
            >
              <Menu size={18} /> Kategóriák
           </button>
            
            {isOpen && (
             <>
               {/* Kattintás bárhová máshová bezárja a menüt */}
               <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
               
               {/* A lenyíló lista */}
               <div className="absolute top-full left-0 mt-3 w-64 bg-black border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 py-2">
                 <div className="px-4 py-2 text-[10px] text-gray-500 border-b border-gray-900 mb-2 tracking-widest">NAVIGÁCIÓ</div>
                 {menuItems.map((item, idx) => (
                   <a 
                     key={idx} 
                     href={item.href}
                     className={`block px-5 py-3 hover:bg-zinc-900 transition-colors border-l-2 border-transparent hover:border-green-600 ${item.isSale ? 'text-red-500' : 'text-gray-200'}`}
                   >
                     <div className="flex items-center justify-between italic">
                       <span>{item.name} {item.icon && <span className="ml-2">{item.icon}</span>}</span>
                       {item.isSale && <Percent size={12} />}
                     </div>
                   </a>
                  ))}
               </div>
             </>
            )}
          </div>

         {menuItems.map((item, idx) => (
            <a 
             key={idx} 
             href={item.href} 
             className={`transition-colors hover:text-green-500 flex items-center gap-1 ${item.isSale ? 'text-red-500' : 'text-gray-100'}`}
            >
             {item.name}
             {item.icon && <span className="text-sm">{item.icon}</span>}
             {item.isSale && <Percent size={14} />}
            </a>
          ))}
        </nav>

        {/* JAVÍTOTT Játék a kedvezményekért sáv */}
        <div className="bg-[#0a0a0a] border-t border-green-900/10 py-2.5 text-center text-white">
          <a href="/game" className="text-[12px] text-green-500 tracking-[0.5em] font-black animate-pulse uppercase">
            ⚡ Játék a kedvezményekért ⚡
          </a>
        </div>
      </header>
    </div>
  );
}
