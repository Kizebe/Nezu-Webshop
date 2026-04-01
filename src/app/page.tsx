'use client';

import Header from '@/components/Header';

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
      {/* 🎨 A CERUZÁS TEXTÚRA ÉS A SZŰRŐ DEFINÍCIÓJA */}
      <svg className="hidden">
        <filter id="pencilTexture">
          {/* Ez a rész teszi "rezgőssé" a vonalakat */}
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>

      <style>{`
        @keyframes softGlow {
          0% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.2); border-color: #D4AF37; }
          50% { box-shadow: 0 0 15px rgba(212, 175, 55, 0.4); border-color: #ffffff; }
          100% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.2); border-color: #D4AF37; }
        }
        .animate-soft-glow {
          animation: softGlow 4.5s infinite ease-in-out;
        }

        /* Arany satírozás - bal oldal */
        .sketch-gold {
          background: repeating-linear-gradient(
            45deg,
            rgba(212, 175, 55, 0) 0px,
            rgba(212, 175, 55, 0.15) 2px,
            rgba(212, 175, 55, 0) 4px,
            rgba(212, 175, 55, 0.05) 7px
          );
          filter: url(#pencilTexture);
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
        }

        /* Lila satírozás - Játékbarlang */
        .sketch-purple {
          background: repeating-linear-gradient(
            45deg,
            rgba(168, 85, 247, 0.1) 0px,
            rgba(236, 72, 153, 0.2) 3px,
            rgba(168, 85, 247, 0) 5px,
            rgba(168, 85, 247, 0.05) 10px
          );
          filter: url(#pencilTexture);
        }
      `}</style>

      <Header />

      {/* 1. HERO BANNER - Satírozott, beljebb húzott */}
      <section className="w-full bg-white pt-2 pb-0 border-b border-zinc-50 relative">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[220px] md:h-[280px]">
          
          {/* BAL OLDAL - Apró örömök (Arany satírral) */}
          <div className="flex-1 pl-32 text-center relative py-10">
            <div className="absolute inset-0 sketch-gold -z-10 scale-150"></div>
            
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-2 block italic">Exkluzív Válogatás</span>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-3 text-zinc-900">
                Apró örömök,<br/>nagy pillanatok.
              </h1>
              <p className="text-[11px] md:text-xs text-zinc-500 font-medium mb-6 max-w-xs mx-auto leading-relaxed">
                Válogatott kincsek, kuponokkal fűszerezve. <br/> 
                Szerezd meg az akciós kedvezményeket!
              </p>
              <div className="flex justify-center">
                <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                  Kuponok begyűjtése
                </button>
              </div>
            </div>
          </div>

          {/* ⚡ ALA / HONEYPOT HIDDEN TRIGGER ⚡ */}
          <div className="w-4 h-4 opacity-0 pointer-events-none select-none">🐾</div>

          {/* JOBB OLDAL - JÁTÉKBARLANG (Lila satírral) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[360px] p-8 md:p-10 rounded-[40px] shadow-[0_15px_40px_rgba(168,85,247,0.1)] transform hover:scale-[1.01] transition-transform cursor-pointer group relative overflow-hidden text-center bg-white border-4 border-zinc-50">
              {/* Ez a réteg a satírozás */}
              <div className="absolute inset-0 sketch-purple opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-purple-700 text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-1">
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-12 bg-purple-200 my-4"></div>
                <p className="text-purple-600/90 text-[10px] uppercase tracking-[0.3em] font-black leading-tight">
                  XP Gyűjtés • Szintek • Ajándékok
                </p>
                <div className="mt-6 inline-block bg-purple-600 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  Belépés
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KATEGÓRIA SÁV - Sötétlila háttér, Pulzáló lila gombokkal */}
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
              <span className="text-[15px] font-black uppercase tracking-tighter text-white group-hover:text-black italic">
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Sötétebb szürke kockák (zinc-300) */}
      <div className="max-w-[1600px] mx-auto px-6 py-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-300 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                {/* Product Space */}
              </div>
              <div className="px-2 text-center">
                <h3 className="text-[14px] font-bold text-zinc-800 leading-tight mb-1 uppercase tracking-tighter">Nezu Selection #{i+1}</h3>
                <span className="text-lg font-black text-zinc-900 italic">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
