// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  // A fix 5+1 pillér sorrendje
  const categories = [
    { name: 'Gyerekruházat', href: '#' },
    { name: 'Otthon és lakberendezés', href: '#' },
    { name: 'Pet Shop 🐾', href: '#' },
    { name: 'BBQ & Whiskey esszenciák', href: '#' },
    { name: 'Ajándéktárgyak', href: '#' },
    { name: 'Kiárusítás %', href: '#', isSale: true },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10">
      <Header />

      {/* 1. HERO BANNER - 20%-al alacsonyabb, beljebb húzott szegélyekkel */}
      <section className="w-full bg-white pt-6 pb-2 border-b border-zinc-50">
        <div className="max-w-[1400px] mx-auto px-12 flex flex-row items-center justify-center gap-16 h-[260px] md:h-[340px]">
          
          {/* BAL OLDAL - Brand & Kuponok (Szélesebb, beljebb) */}
          <div className="flex-[1.2] min-w-[400px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 mb-2 block">Exkluzív Ajánlat</span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-3 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-xs md:text-sm text-zinc-500 font-medium mb-6 leading-relaxed">
              Fedezd fel válogatott kincseinket! <br/> 
              Szerezd meg az akciós kuponokat még ma!
            </p>
            <button className="bg-black text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
              Kuponok begyűjtése
            </button>
          </div>

          {/* ⚡ ALA / HONEYPOT HIDDEN TRIGGER ⚡ */}
          <div className="w-4 h-4 opacity-0 cursor-default select-none pointer-events-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Lila, szélesebb, közelebb) */}
          <div className="flex-1 flex justify-end min-w-[350px]">
            <div className="w-full bg-gradient-to-br from-purple-500 to-pink-500 p-8 md:p-10 rounded-[40px] shadow-[0_15px_40px_rgba(168,85,247,0.25)] transform hover:scale-[1.01] transition-transform cursor-pointer group relative overflow-hidden border-4 border-white/20">
              <div className="relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-1">
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-10 bg-white/40 my-4"></div>
                <p className="text-white/90 text-[10px] uppercase tracking-[0.3em] font-black leading-tight">
                  XP Gyűjtés • Szintek • Ajándékok
                </p>
                <div className="mt-6 inline-block bg-white text-purple-600 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                  Belépés
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KATEGÓRIA SÁV - Világoslila háttér, Fekete-Arany-Fehér harmónia */}
      <div className="w-full bg-[#f3e8ff] border-y border-purple-100 py-4">
        <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between gap-2">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className={`
                flex-1 text-center py-3 px-2 rounded-xl transition-all duration-300
                bg-black border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:border-black group
                ${cat.isSale ? 'animate-pulse ring-2 ring-red-400 ring-offset-2 ring-offset-[#f3e8ff]' : ''}
              `}
            >
              <span className={`
                text-[14.5px] font-black uppercase tracking-tighter transition-colors
                text-white group-hover:text-black
              `}>
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - 5-ös elosztás */}
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div className="h-[1px] flex-1 bg-zinc-100"></div>
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-300 mx-8">Nezu Selection</h2>
          <div className="h-[1px] flex-1 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-50 mb-4 relative overflow-hidden rounded-3xl border border-zinc-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)]">
                {/* Product Placeholder */}
              </div>
              <div className="px-2">
                <h3 className="text-[13px] font-bold text-zinc-800 leading-tight mb-1">Válogatott Kincs #{i+1}</h3>
                <span className="text-base font-black text-zinc-900 italic">8.490 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
