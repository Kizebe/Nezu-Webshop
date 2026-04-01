'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Betűtípusok
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
    {/* overflow-hidden eltávolítva, az oldal lefelé görgethető */}
    <main className="bg-white min-h-screen pt-48 pb-0 relative text-zinc-900">
      
      {/* A Te saját, már VIP sávot tartalmazó Header-ed */}
      <Header />

      {/* 1. HERO BANNER */}
      <section className="w-full bg-white pt-8 pb-16 border-b border-zinc-50 relative">
        <div className="max-w-[1550px] mx-auto px-12 flex flex-row items-center justify-between h-[220px] md:h-[260px]">
          
          {/* BAL OLDAL - Apró örömök */}
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

          {/* JOBB OLDAL - Játékbarlang */}
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
                      className="bg-black/20 hover:bg-white text-white hover:text-purple-700 py-3.5 px-4 rounded-2xl transition-all duration-300 backdrop-blur-md border border-white/10 flex flex-col items-start"
                    >
                      <span className={`${masculineFont.className} text-[9px] uppercase tracking-widest font-black mb-1 text-left`}>
                        {game.name}
                      </span>
                      <span className="text-[7px] opacity-70 uppercase font-bold tracking-tighter">
                        {game.status}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TERMÉKRÁCS - 20 db, 4 sorban */}
      <section className="max-w-[1600px] mx-auto px-6 py-12 bg-white">
        <div className="flex items-center justify-between mb-16 px-10">
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
            <h2 className={`${masculineFont.className} text-[10px] uppercase tracking-[0.5em] text-zinc-300 mx-10`}>Nezu Selection</h2>
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[16/11] w-full bg-zinc-300/60 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-3">
              </div>
              <div className="text-center px-2">
                <h3 className={`${masculineFont.className} text-[11px] text-zinc-800 leading-tight mb-1 uppercase tracking-tight`}>
                  Nezu Item #{i+1}
                </h3>
                <span className="text-lg font-black text-zinc-900 italic tracking-tighter">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. KÖTELEZŐ TÁJÉKOZTATÓ ELEMEK - Puritán, formázatlan PC stílus */}
      <footer className="w-full bg-[#f4f4f4] border-t border-[#dddddd] mt-20 p-10 font-serif text-black text-[14px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 1. Oszlop */}
          <div>
            <div className="mb-3 uppercase underline">Rólunk</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Rólunk</a></li>
              <li><a href="#" className="hover:underline">Karrier</a></li>
              <li><a href="#" className="hover:underline">Impresszum</a></li>
              <li><a href="#" className="hover:underline">Cookie használat</a></li>
            </ul>
          </div>

          {/* 2. Oszlop */}
          <div>
            <div className="mb-3 uppercase underline">Rendelés és szállítás</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Fizetési módok</a></li>
              <li><a href="#" className="hover:underline">Szállítási információk</a></li>
              <li><a href="#" className="hover:underline">Gyakran ismételt kérdések</a></li>
              <li><a href="#" className="hover:underline">Fogalom és jelmagyarázat</a></li>
              <li><a href="#" className="hover:underline">Nyereményjáték szabályzat</a></li>
            </ul>
          </div>

          {/* 3. Oszlop */}
          <div>
            <div className="mb-3 uppercase underline">Elérhetőségek</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Vásárlóknak</a></li>
              <li><a href="#" className="hover:underline">Kapcsolatfelvétel</a></li>
              <li><a href="#" className="hover:underline">Reklamáció</a></li>
              <li><a href="#" className="hover:underline">Hírlevél leiratkozás</a></li>
            </ul>
          </div>

        </div>
      </footer>
    </main>
  );
}
