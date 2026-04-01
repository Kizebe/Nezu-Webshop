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
      <Header />

      {/* 1. HERO BANNER SZEKCIÓ */}
      <section className="relative w-full bg-white z-20">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[220px] md:h-[280px]">
          
          {/* BAL OLDAL - Apró örömök (pl-32 behúzás) */}
          <div className="flex-[1.2] pl-32 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-2 block italic">Exkluzív Válogatás</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-3 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-[11px] md:text-xs text-zinc-500 font-medium mb-6 max-w-xs mx-auto leading-relaxed">
              Válogatott kincsek, kuponokkal fűszerezve.
            </p>
            <div className="flex justify-center">
              <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-pink-500 transition-all rounded-full shadow-lg">
                Kuponok begyűjtése
              </button>
            </div>
          </div>

          {/* REJTETT ALA TRIGGER */}
          <div className="w-4 h-4 opacity-0 pointer-events-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[360px] bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-10 rounded-[40px] shadow-[0_20px_50px_rgba(168,85,247,0.2)] transform hover:scale-[1.01] transition-transform cursor-pointer group relative overflow-hidden border-4 border-white text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-2xl md:text-4xl font-black italic tracking-tighter uppercase mb-1 leading-tight">
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="mt-4 inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                  Belépés
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌊 A VÍZESÉS ÍV (SVG Divider) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120.5%] h-[80px] fill-white rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.29C80.7,105.78,233.23,72.79,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. LEBEGŐ NAVIGÁCIÓ (Szigetek a vízesésben) */}
      <div className="relative z-30 pt-16 pb-10">
        <nav className="max-w-[1200px] mx-auto px-8 flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-zinc-100 shadow-sm hover:shadow-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-500 group"
            >
              <span className="text-[12px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-purple-700 italic">
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Most már egy finom, derengő háttéren */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-10">
        {/* Halvány vizuális mélység (Gradient Cloud) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(243,232,255,0.5)_0%,transparent_70%)] -z-10"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[4/5] w-full bg-zinc-300/50 mb-5 relative overflow-hidden rounded-[3rem] border border-zinc-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(168,85,247,0.15)] group-hover:-translate-y-3">
                {/* Product Space */}
              </div>
              <div className="text-center px-2">
                <h3 className="text-[13px] font-bold text-zinc-800 leading-tight mb-1 uppercase tracking-tight">Nezu Selection #{i+1}</h3>
                <span className="text-base font-black text-purple-900 italic tracking-tighter">10.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
