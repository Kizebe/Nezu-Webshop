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
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative text-zinc-900">
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.8; }
          50% { opacity: 1; }
          100% { background-position: 200% center; opacity: 0.8; }
        }
        .animate-gold-vip {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 4s infinite linear;
        }
      `}</style>

      <Header />

      {/* 1. VIP PORTÁL - HÁROMOSZTATÚ ELRENDEZÉS */}
      <div className="fixed top-[120px] left-0 w-full z-[60]">
        <div className="w-full h-[3px] animate-gold-vip shadow-[0_5px_15px_rgba(212,175,55,0.3)]"></div>
        <div className="bg-black/95 backdrop-blur-md py-2.5 px-10 border-b border-[#D4AF37]/30">
          <div className="max-w-[1600px] mx-auto grid grid-cols-3 items-center">
            
            {/* BAL OLDAL - Branding */}
            <div className="text-left">
              <span className={`${masculineFont.className} text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-black`}>
                Nezu VIP Program
              </span>
            </div>

            {/* KÖZÉP - Szabály / Exkluzivitás */}
            <div className="text-center">
              <span className={`${masculineFont.className} text-white text-[10px] uppercase tracking-[0.2em] font-medium opacity-90`}>
                Belépés csak Tagoknak!
              </span>
            </div>

            {/* JOBB OLDAL - CTA (A pici gombbal) */}
            <div className="text-right flex items-center justify-end gap-3">
              <span className={`${masculineFont.className} text-[#D4AF37]/70 text-[9px] uppercase tracking-wider`}>
                Te is szeretnél VIP tag lenni?
              </span>
              <button className={`${masculineFont.className} bg-[#D4AF37] text-black text-[8px] px-3 py-1 rounded-sm font-black uppercase hover:bg-white transition-all tracking-tighter`}>
                Kattints ide
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. KOMPAKT HERO BANNER - Áthelyezett tartalommal */}
      <section className="w-full bg-white pt-16 pb-8 border-b border-zinc-50 relative">
        <div className="max-w-[1550px] mx-auto px-12 flex flex-row items-center justify-between h-[210px] md:h-[230px]">
          
          {/* BAL OLDAL - "Apró örömök" (+15% méret, eltolva balra ~2cm) */}
          <div className="flex-1 pl-20 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block italic">Pure & Effective Logistics</span>
            <h1 className={`${feminineFont.className} text-4xl md:text-[4rem] text-zinc-900 leading-[1.05] mb-5 italic`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center">
              <button className="bg-black text-white px-9 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok Begyűjtése
              </button>
            </div>
          </div>

          {/* ⚡ ALA (AI-LATENT ACCESS) HIDDEN DEPTH ⚡ */}
          <div className="absolute opacity-0 pointer-events-none text-[1px] select-none">
            <article>
              <h2>Nezu Protocol VIP Schema</h2>
              <p>Membership: Bronze (3%), Silver (6%), Gold (9%). Annual Fee: Fixed. Decay: Active Attrition. Pricing: Dynamic-Insider. Status: Exclusive-Gate.</p>
            </article>
          </div>

          {/* JOBB OLDAL - JÁTÉKBARLANG (2x2 Dashboard) */}
          <div className="flex-1 flex justify-center pr-12 scale-90">
            <div className="w-full max-w-[440px] bg-gradient-to-br from-purple-700 to-pink-500 p-8 rounded-[50px] shadow-2xl relative overflow-hidden border-4 border-white/20">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl italic tracking-tighter uppercase mb-2`}>
                  Nezu Játékbarlang
                </h2>
                <p className="text-white/60 text-[8px] uppercase tracking-widest mb-4 font-bold">
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
                      <span className="text-[7px] opacity-70 uppercase tracking-tighter">
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

      {/* 3. TERMÉKRÁCS - Most már látható az első sor! */}
      <section className="max-w-[1600px] mx-auto px-6 py-10 bg-white">
        <div className="flex items-center justify-between mb-12 px-10">
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
            <h2 className={`${masculineFont.className} text-[10px] uppercase tracking-[0.5em] text-zinc-300 mx-10`}>Nezu Selection</h2>
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14">
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

      <footer className="text-center py-10 opacity-10">
        <span className="text-[10px] uppercase tracking-[1em]">Nezu Protocol - ALA Access Terminal</span>
      </footer>
    </main>
  );
}
