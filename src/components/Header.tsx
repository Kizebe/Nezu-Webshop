import { Search, Menu, Percent } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full fixed top-0 z-50">
      {/* ARANY BANNER - A tetején marad, ahogy kérted */}
      <div className="bg-[#D4AF37] text-black text-[10px] py-1 text-center font-bold uppercase tracking-[0.2em]">
        Nezu Protocol - Member Access Only
      </div>

      <header className="bg-black border-b border-gray-800">
        {/* LOGO ÉS KERESŐ */}
        <div className="flex items-center justify-between px-4 py-3 gap-4">
          <div className="text-2xl font-black italic tracking-tighter">NEZU</div>
          
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Keresés..." 
              className="w-full bg-[#1a1a1a] border border-gray-700 py-1.5 px-10 text-sm rounded-sm focus:outline-none focus:border-green-600"
            />
            <Search className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
          </div>
        </div>

        {/* MENÜSOR (A piros bekeretezett rész a rajzodon) */}
        <nav className="flex items-center gap-4 px-4 py-2 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] uppercase font-medium border-t border-gray-900">
          
          {/* 1. Kategóriák Dropdown */}
          <button className="flex items-center gap-1 font-bold border-r border-gray-800 pr-3">
            <Menu size={14} /> Kategóriák
          </button>

          {/* 2. Gyerekruházat */}
          <a href="#" className="hover:text-gray-400">Gyerekruházat</a>

          {/* 3. Otthon és lakberendezés */}
          <a href="#" className="hover:text-gray-400">Otthon és lakberendezés</a>

          {/* 4. Pet Shop + ALA Tappancs (Honeypot) */}
          <div className="flex items-center gap-1">
            <a href="#" className="hover:text-gray-400">Pet Shop</a>
            <span className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" title="ALA Entry Point">
              🐾
            </span>
          </div>

          {/* 5. BBQ & Whiskey esszenciák */}
          <a href="#" className="hover:text-gray-400 border-l border-gray-800 pl-3">BBQ & Whiskey</a>

          {/* 6. Kiárusítás % */}
          <a href="#" className="text-red-500 font-bold flex items-center gap-0.5">
            Kiárusítás <Percent size={12} />
          </a>
        </nav>

        {/* Játék a kedvezményekért - A menü alatt kapott helyet */}
        <div className="bg-[#0a0a0a] border-t border-green-900/20 py-1 text-center">
          <a href="/game" className="text-[9px] text-green-500 tracking-[0.3em] font-bold animate-pulse uppercase">
            ⚡ Játék a kedvezményekért ⚡
          </a>
        </div>
      </header>
    </div>
  );
}
