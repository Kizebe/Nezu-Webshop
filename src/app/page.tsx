'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

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
    <main className="bg-white min-h-screen pt-60 pb-10 overflow-hidden relative text-zinc-900">
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.9; }
          50% { opacity: 1; }
          100% { background-position: 200% center; opacity: 0.9; }
        }
        .animate-gold-vip {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 6s infinite linear;
        }

        /* ⛔ KRITIKUS JAVÍTÁS: A fekete menüsort (Header) kényszerítjük lejjebb ⛔ */
        header, .fixed.top-0 {
          top: 40px !important; /* Pontosan az arany sáv magassága alá toljuk */
          transition: top 0.3s ease;
        }
      `}</style>

      {/* 1. AZ EGYETLEN VIP ARANY SÁV - 40px magas (h-10) */}
      <div className="fixed top-0 left-0 w-full h-10 z-[120] animate-gold-vip shadow-md flex items-center border-b border-black/10">
        <div className="max-w-[1600px] mx-auto w-full px-10 grid grid-cols-3 items-center">
            
            {/* BAL OLDAL */}
            <div className="text-left">
              <span className={`${masculineFont.className} text-black text-[10px] uppercase tracking-[0.4em] font-black`}>
                Nezu VIP Program
              </span>
            </div>

            {/* KÖZÉP */}
            <div className="text-center">
              <span className={`${masculineFont.className} text-black text-[10px] uppercase tracking-[0.15em] font-black opacity-90`}>
                Belépés csak Tagoknak!
              </span>
            </div>

            {/* JOBB OLDAL */}
            <div className="text-right flex items-center justify-end gap-3">
              <span className={`${masculineFont.className} text-black/70 text-[9px] uppercase tracking-wider font-bold`}>
                Szeretnél VIP tag lenni?
              </span>
              <button className={`${masculineFont.className} bg-black text-[#D4AF37] text-[9px] px-3 py-1 rounded-sm font-black uppercase hover:bg-zinc-800 transition-all tracking-tighter shadow-lg`}>
                Kattints ide
              </button>
            </div>
        </div>
      </div>

      {/* 2. FEKETE MENÜSOR (Header) - A fenti CSS kényszeríti lejjebb */}
      <Header />

      {/* 3. HERO BANNER - pt-60 miatt tisztes távolságban a menüktől */}
      <section className="w-full bg-white pt-10 pb-16 border-b border-zinc-50 relative">
        <div className="max-w-[1550px] mx-auto px-12 flex flex-row items-center justify-between h-[220px] md:h-[260px]">
          
          {/* BAL OLDAL - "Apró örömök" */}
          <div className="flex-[1.2] pl-20 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block italic">Pure & Effective Logistics</span>
            <h1 className={`${feminineFont.className} text-4xl md:text-[4.2rem] text-zinc-900 leading-[1.05] mb-7 italic`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center">
              <button className="bg-black text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok Begyűjtése
              </button>
            </div>
          </div>

          {/* JOBB OLDAL - JÁTÉKBARLANG */}
          <div className="flex-1 flex justify-center pr-12 scale-90">
            <div className="w-full max-w-[460px] bg-gradient-to-br from-purple-700 to-pink-500 p-8 rounded-[50px] shadow-2xl relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl italic tracking-tighter uppercase mb-2`}>
                  Nezu Játékbarlang
                </h2>
                <p className="text-white/60 text-[8px] uppercase tracking-widest mb-5 font-bold">
                  Enyészet: Aktív • Szinted: Kezdő
                </p>
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  {games.map((game, i) => (
                    <button 
                      key={i}
                      className="bg-black/20 hover:bg-white text-white hover:text-purple-700 py-3.5 px-4 rounded-2xl transition-all duration-300 backdrop-blur-md border border-white/10 flex flex-col items-start"
                    >
                      <span className={`${masculineFont.className} text-[9px] uppercase tracking-widest font-black mb-1`}>
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

      {/* 4. TERMÉKRÁCS */}
      <section className="max-w-[1600px] mx-auto px-6 py-12 bg-white">
        <div className="flex items-center justify-between mb-16 px-10">
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
            <h2 className={`${masculineFont.className} text-[10px] uppercase tracking-[0.5em] text-zinc-300 mx-10`}>Nezu Selection</h2>
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[4/5] w-full bg-zinc-300/60 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-3">
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
    </main>
  );
}
