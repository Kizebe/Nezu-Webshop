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
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden">
      <style>{`
        @keyframes subtlePulse {
          0% { border-color: #D4AF37; opacity: 0.8; }
          50% { border-color: #A855F7; opacity: 1; }
          100% { border-color: #D4AF37; opacity: 0.8; }
        }
        .hover-ritual:hover {
          background-color: #f3e8ff; /* Nagyon halvány lila hovernél */
          color: #7e22ce;
          border-color: #7e22ce;
          transform: translateY(-1px);
        }
      `}</style>

      <Header />

      {/* 1. HERO BANNER - Maradt a kért 4cm-es behúzás */}
      <section className="w-full bg-white pt-2 pb-0 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[220px] md:h-[280px]">
          <div className="flex-1 pl-32 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-2 block italic">Exkluzív Válogatás</span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-3 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-[11px] md:text-xs text-zinc-500 font-medium mb-6 max-w-xs mx-auto leading-relaxed">
              Válogatott kincsek, kuponokkal fűszerezve.
            </p>
            <div className="flex justify-center">
              <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok begyűjtése
              </button>
            </div>
          </div>

          <div className="w-4 h-4 opacity-0 pointer-events-none">🐾</div>

          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[360px] bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-10 rounded-[40px] shadow-[0_10px_30px_rgba(168,85,247,0.15)] cursor-pointer group relative overflow-hidden text-center border-4 border-white/20">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-1">Nezu Játékbarlang!</h2>
                <p className="text-white/90 text-[10px] uppercase tracking-[0.3em] font-black leading-tight">XP • Szintek • Ajándékok</p>
                <div className="mt-6 inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">Belépés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOMPÍTOTT NAVIGÁCIÓS SÁV - Szisztematikus haladásért */}
      <div className="w-full bg-zinc-50/50 border-y border-zinc-100 py-4"> {/* Fehér/Világosszürke alap */}
        <nav className="max-w-[1400px] mx-auto px-8 flex items-center justify-between gap-4">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="flex-1 text-center py-3 px-2 rounded-lg transition-all duration-300 
                         border border-zinc-200 bg-white text-zinc-400
                         hover-ritual group"
            >
              <span className="text-[13px] font-bold uppercase tracking-widest transition-colors group-hover:text-purple-700">
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Most már ez a főszereplő */}
      <div className="max-w-[1600px] mx-auto px-6 py-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-300 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
              </div>
              <div className="px-2 text-center text-zinc-900">
                <h3 className="text-[14px] font-bold leading-tight mb-1 uppercase tracking-tighter">Nezu Selection #{i+1}</h3>
                <span className="text-lg font-black italic">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
