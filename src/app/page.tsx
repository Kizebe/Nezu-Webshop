'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Betűtípusok stabil konfigurálása
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
    { name: 'Gyerekruházat', href: '#' },
    { name: 'Otthon és lakberendezés', href: '#' },
    { name: 'Pet Shop 🐾', href: '#' },
    { name: 'BBQ & Whiskey esszenciák', href: '#' },
    { name: 'Ajándéktárgyak', href: '#' },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative">
      {/* ANIMÁCIÓK: Arany csillogás és Lebegés */}
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.8; }
          50% { opacity: 1; shadow: 0 0 20px rgba(212, 175, 55, 0.8); }
          100% { background-position: 200% center; opacity: 0.8; }
        }
        .animate-gold-shine {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 3s infinite linear;
        }
        @keyframes subtleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .floating-island {
          animation: subtleFloat 4s infinite ease-in-out;
        }
      `}</style>

      <Header />

      {/* FELSŐ ARANY SÁV - Intenzív pulzálással */}
      <div className="w-full h-[4px] animate-gold-shine shadow-[0_5px_25px_rgba(212,175,55,0.4)] relative z-50"></div>

      {/* 1. HERO BANNER - 20%-al kisebb szekció, de 15%-al nagyobb címmel */}
      <section className="w-full bg-white pt-10 pb-6 border-b border-zinc-50 relative">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[220px] md:h-[260px]">
          
          {/* BAL OLDAL - "Apró örömök" +15% méretnövekedéssel */}
          <div className="flex-[1.4] pl-32 text-center">
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

          {/* ⚡ ALA TRIGGER (Rejtett) ⚡ */}
          <div className="w-4 h-4 opacity-0 pointer-events-none select-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Visszaállított eredeti stílus, 20% kisebb) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[280px] bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-10 rounded-[45px] shadow-2xl transform hover:scale-105 transition-all cursor-pointer relative overflow-hidden border-4 border-white/30 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl md:text-4xl italic tracking-tighter uppercase mb-1 leading-tight`}>
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-10 bg-white/40 my-4"></div>
                <div className="inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  Belépés
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEBEGŐ ABLAKOS MENÜ - Szigetek a "vízesésben" */}
      <div className="relative z-30 -translate-y-8">
        <nav className="max-w-[1200px] mx-auto px-8 flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="px-7 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-100 shadow-xl hover:shadow-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all duration-500 floating-island"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className={`${masculineFont.className} text-[12px] font-bold uppercase tracking-widest text-zinc-500 hover:text-purple-700`}>
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Montserrat (Maszkulin) karakterrel */}
      <div className="max-w-[1600px] mx-auto px-6 py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              {/* Sötétebb termékkockák */}
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
      </div>
    </main>
  );
}
