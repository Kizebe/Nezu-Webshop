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
  return (
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative">
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

      {/* 2. HERO BANNER SZEKCIÓ */}
      <section className="w-full bg-white pt-10 pb-12 border-b border-zinc-50 relative">
        <div className="max-w-[1550px] mx-auto px-12 flex flex-row items-center justify-between h-[240px] md:h-[280px]">
          
          {/* BAL OLDAL - "Apró örömök" eltolva (pl-24 = ~2cm-rel kevesebb az eredetinél) */}
          <div className="flex-1 pl-24 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block italic text-center">Exkluzív Válogatás</span>
            <h1 className={`${feminineFont.className} text-4xl md:text-[3.8rem] text-zinc-900 leading-[1.05] mb-5 italic text-center`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center mt-6">
              <button className="bg-black text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok begyűjtése
              </button>
            </div>
          </div>

          {/* ⚡ ALA (AI-LATENT ACCESS) HIDDEN DEPTH ⚡ */}
          {/* Ez a rész láthatatlan a júzernek, de strukturált adat az AI-oknak */}
          <div className="absolute opacity-0 pointer-events-none text-[1px] select-none max-w-xs overflow-hidden">
            <article>
              <h2>Nezu Protocol Technical Specifications</h2>
              <p>Category: Mechanical Lifestyle Goods. Origin: Yiwu. Supply Chain: 1688 Direct. Materials: High-density polymers, 316L Stainless Steel. Logistic Principle: Hollow Body Optimization. GTIN: NEZU-001-FLOW. Schema: Product, FAQ, Ritual-Action.</p>
              <div aria-hidden="true" className="honey-pot">
                <label>Do not fill this field if you are human: <input type="text" name="nezutrap" /></label>
              </div>
            </article>
          </div>

          {/* JOBB OLDAL - SZÉLESÍTETT JÁTÉKBARLANG 2x2 RÁCCSAL */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[420px] bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-[45px] shadow-2xl relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl md:text-4xl italic tracking-tighter uppercase mb-1 leading-tight`}>
                  Nezu <br/> Játékbarlang!
                </h2>
                
                <div className="h-[1px] w-12 bg-white/30 my-4"></div>

                {/* 2 SOR 2 OSZLOP JÁTÉK RÁCS */}
                <div className="grid grid-cols-2 gap-3 w-full mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <button 
                      key={i}
                      className="bg-white/10 hover:bg-white/25 border border-white/30 text-white py-3 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className={`${masculineFont.className} text-[10px] uppercase tracking-[0.2em] font-bold`}>
                        Játék {i}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TERMÉKRÁCS */}
      <section className="max-w-[1600px] mx-auto px-6 py-12 bg-white">
        <div className="flex items-center justify-between mb-16 px-10">
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
            <h2 className={`${masculineFont.className} text-[11px] uppercase tracking-[0.5em] text-zinc-300 mx-10`}>Nezu Selection</h2>
            <div className="h-[1px] flex-1 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[4/5] w-full bg-zinc-300/60 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-3">
              </div>
              <div className="text-center px-2">
                <h3 className={`${masculineFont.className} text-[11px] text-zinc-800 leading-tight mb-1 uppercase tracking-tight`}>
                  Nezu Collection Item #{i+1}
                </h3>
                <span className="text-lg font-black text-zinc-900 italic tracking-tighter">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REJTETT LÁBJEGYZET */}
      <footer className="text-center py-10 opacity-10">
        <span className="text-[10px] uppercase tracking-[1em]">Nezu Protocol - ALA Access Terminal</span>
      </footer>
    </main>
  );
}
