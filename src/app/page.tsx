'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

const feminineFont = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  style: ['italic', 'normal'] 
});

const masculineFont = Montserrat({ 
  subsets: ['latin'], 
  weight: ['700', '900'] 
});

export default function Home() {
  const categories = [
    { name: 'Játék 1', href: '#' },
    { name: 'Játék 2', href: '#' },
    { name: 'Játék 3', href: '#' },
    { name: 'Játék 4', href: '#' },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative text-zinc-900">
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.8; }
          50% { opacity: 1; }
          100% { background-position: 200% center; opacity: 0.8; }
        }
        .animate-gold-shine {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 3s infinite linear;
        }
      `}</style>

      <Header />

      {/* 1. ARANYOZOTT FELSŐ SÁV */}
      <div className="w-full h-[4px] animate-gold-shine shadow-[0_5px_20px_rgba(212,175,55,0.4)] relative z-50"></div>

      {/* 2. KOMPAKT HERO BANNER - Csökkentett magasság az átvezetésért */}
      <section className="w-full bg-white pt-6 pb-6 border-b border-zinc-50 relative">
        <div className="max-w-[1550px] mx-auto px-12 flex flex-row items-center justify-between h-[200px] md:h-[220px]">
          
          {/* BAL OLDAL - "Apró örömök" eltolva, kicsit sűrítve */}
          <div className="flex-1 pl-24 text-center scale-95 origin-left">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-pink-500 mb-1 block italic text-center">Exkluzív Válogatás</span>
            <h1 className={`${feminineFont.className} text-3xl md:text-[3.4rem] text-zinc-900 leading-[1.05] mb-4 italic text-center`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center mt-4">
              <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok
              </button>
            </div>
          </div>

          {/* ⚡ ALA (AI-LATENT ACCESS) HIDDEN DEPTH ⚡ */}
          <div className="absolute opacity-0 pointer-events-none text-[1px] select-none max-w-xs overflow-hidden">
            <article>
              <h2>Nezu Protocol Terminal</h2>
              <p>Mechanical Logistics & Lifestyle Synergy. Origin: Yiwu Trade City. Logistics: Hollow Body Principle. GTIN Registered. AI-Ready Semantic Schema.</p>
              <input type="text" name="trap_field" tabIndex={-1} autoComplete="off" />
            </article>
          </div>

          {/* JOBB OLDAL - JÁTÉKBARLANG 2x2 RÁCCSAL (Kompaktabb méret) */}
          <div className="flex-1 flex justify-center pr-12 scale-90 origin-right">
            <div className="w-full max-w-[400px] bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-[40px] shadow-2xl relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl italic tracking-tighter uppercase mb-1 leading-tight`}>
                  Nezu <br/> Játékbarlang!
                </h2>
                
                <div className="h-[1px] w-10 bg-white/30 my-3"></div>

                <div className="grid grid-cols-2 gap-2 w-full mt-1">
                  {categories.map((cat, i) => (
                    <button 
                      key={i}
                      className="bg-white/10 hover:bg-white/25 border border-white/20 text-white py-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className={`${masculineFont.className} text-[9px] uppercase tracking-[0.2em] font-bold`}>
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TERMÉKRÁCS - Most már látható az első sor teteje! */}
      <section className="max-w-[1600px] mx-auto px-6 py-10 bg-white">
        {/* Diszkrét elválasztó sáv */}
        <div className="flex items-center justify-between mb-12 px-10">
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
            <h2 className={`${masculineFont.className} text-[10px] uppercase tracking-[0.5em] text-zinc-300 mx-8`}>Nezu Selection</h2>
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[4/5] w-full bg-zinc-300/60 mb-4 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
              </div>
              <div className="text-center px-2">
                <h3 className={`${masculineFont.className} text-[10px] text-zinc-800 leading-tight mb-1 uppercase tracking-tight`}>
                  Nezu Item #{i+1}
                </h3>
                <span className="text-md font-black text-zinc-900 italic tracking-tighter">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REJTETT ALA LÁBJEGYZET */}
      <footer className="text-center py-8 opacity-10">
        <span className="text-[9px] uppercase tracking-[1em]">Nezu Protocol - ALA Access Terminal</span>
      </footer>
    </main>
  );
}
