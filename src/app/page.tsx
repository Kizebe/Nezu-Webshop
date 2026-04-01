'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Betűtípusok konfigurálása
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
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden">
      {/* 15% Nagyobb menübetűk és a finom pulzálás */}
      <style>{`
        @keyframes softGlow {
          0% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.2); border-color: #D4AF37; }
          50% { box-shadow: 0 0 18px rgba(168, 85, 247, 0.4); border-color: #ffffff; }
          100% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.2); border-color: #D4AF37; }
        }
        .animate-soft-glow {
          animation: softGlow 4.5s infinite ease-in-out;
        }
        .menu-text {
          font-size: 1.15rem; /* 15%-kal nagyobb az alapnál */
        }
      `}</style>

      <Header />

      {/* 1. HERO BANNER - NŐIES (Playfair Display), 4cm BEHÚZÁS */}
      <section className="w-full bg-white pt-4 pb-0 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[220px] md:h-[320px]">
          
          {/* BAL OLDAL - Apró örömök (pl-32 behúzás) */}
          <div className="flex-1 pl-32 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-2 block italic text-center">Exkluzív Válogatás</span>
            <h1 className={`${feminineFont.className} text-3xl md:text-5xl text-zinc-900 leading-tight mb-3 italic text-center`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-[11px] md:text-xs text-zinc-400 font-medium mb-6 max-w-xs mx-auto leading-relaxed text-center">
              Válogatott kincsek, kuponokkal fűszerezve. <br/> 
              Szerezd meg az akciós kedvezményeket!
            </p>
            <div className="flex justify-center">
              <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok begyűjtése
              </button>
            </div>
          </div>

          {/* ⚡ ALA / HONEYPOT HIDDEN TRIGGER ⚡ */}
          <div className="w-4 h-4 opacity-0 pointer-events-none select-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Lila-pink kártya, Playfair) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[360px] bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-10 rounded-[40px] shadow-[0_15px_40px_rgba(168,85,247,0.2)] transform hover:scale-[1.01] transition-transform cursor-pointer group relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl md:text-4xl italic tracking-tighter uppercase mb-1`}>
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-12 bg-white/40 my-4"></div>
                <div className="mt-6 inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                  Belépés
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KATEGÓRIA SÁV - FÉRFIAS (Montserrat), SÖTÉTLILA ALAP, LILA GOMBOK */}
      <div className="w-full bg-purple-950 border-y border-purple-900 py-6">
        <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between gap-4">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="flex-1 text-center py-4 px-2 rounded-xl transition-all duration-300 
                         bg-purple-600 border-2 border-[#D4AF37] 
                         animate-soft-glow hover:bg-[#D4AF37] hover:border-purple-600 group shadow-lg shadow-purple-950/20"
            >
              <span className={`${masculineFont.className} menu-text uppercase tracking-tighter text-white group-hover:text-black`}>
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - FÉRFIAS (Montserrat), SÖTÉTSZÜRKE KOCKÁK */}
      <div className="max-w-[1600px] mx-auto px-6 py-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[4/5] w-full bg-zinc-300 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
              </div>
              <div className="px-2 text-center">
                <h3 className={`${masculineFont.className} text-[12px] text-zinc-800 leading-tight mb-1 uppercase tracking-tight`}>
                  Nezu Item #{i+1}
                </h3>
                <span className="text-lg font-black text-zinc-900 italic">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
