// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  // A fix 5 pillér - Kiárusítás nélkül, hogy kényelmesen elférjenek
  const categories = [
    { name: 'Gyerekruházat', href: '#' },
    { name: 'Otthon és lakberendezés', href: '#' },
    { name: 'Pet Shop 🐾', href: '#' },
    { name: 'BBQ & Whiskey esszenciák', href: '#' },
    { name: 'Ajándéktárgyak', href: '#' },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10">
      <Header />

      {/* 1. HERO BANNER - Alacsonyabb, középre igazított, beljebb húzott */}
      <section className="w-full bg-white pt-4 pb-0 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[240px] md:h-[320px]">
          
          {/* BAL OLDAL - Középre igazított szöveg, mélyen beljebb húzva (~4cm extra) */}
          <div className="flex-1 pl-32 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 mb-2 block">Exkluzív Ajánlat</span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-3 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-[11px] md:text-xs text-zinc-500 font-medium mb-6 max-w-xs mx-auto leading-relaxed">
              Válogatott kincsek neked. <br/> 
              Szerezd meg az akciós kuponokat!
            </p>
            <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
              Kuponok begyűjtése
            </button>
          </div>

          {/* ⚡ ALA / HONEYPOT HIDDEN TRIGGER ⚡ */}
          <div className="w-2 h-2 opacity-0 cursor-default select-none pointer-events-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Középre igazítva, kompakt) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[380px] bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-10 rounded-[40px] shadow-[0_15px_40px_rgba(168,85,247,0.2)] transform hover:scale-[1.01] transition-transform cursor-pointer group relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-1">
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-12 bg-white/40 my-4"></div>
                <p className="text-white/90 text-[10px] uppercase tracking-[0.3em] font-black leading-tight max-w-[200px]">
                  XP Gyűjtés • Szintek • Ajándékok
                </p>
                <div className="mt-6 inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                  Belépés
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KATEGÓRIA SÁV - Sötétebb lila háttér, Fekete-Arany-Fehér harmónia */}
      <div className="w-full bg-purple-950 border-y border-purple-900 py-5">
        <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between gap-4">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="flex-1 text-center py-3.5 px-2 rounded-xl transition-all duration-300 bg-black border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:border-black group"
            >
              <span className="text-[15px] font-black uppercase tracking-tighter text-white group-hover:text-black">
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Sötétebb szürke kockákkal */}
      <div className="max-w-[1600px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-16">
          <div className="h-[1px] flex-1 bg-zinc-200"></div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mx-10 italic">Nezu Selection</h2>
          <div className="h-[1px] flex-1 bg-zinc-200"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              {/* Sötétebb szürke placeholder (zinc-300) */}
              <div className="aspect-[4/5] bg-zinc-300 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="px-2 text-center">
                <h3 className="text-[14px] font-bold text-zinc-800 leading-tight mb-1 group-hover:text-purple-700 transition-colors uppercase tracking-tighter">Válogatott Kincs #{i+1}</h3>
                <span className="text-lg font-black text-zinc-900 italic">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
