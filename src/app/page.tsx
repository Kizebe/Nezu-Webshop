// src/app/page.tsx

export default function Home() {
  const categories = [
    { name: 'Gyerekruházat', href: '#' },
    { name: 'Otthon és lakberendezés', href: '#' },
    { name: 'Pet Shop 🐾', href: '#' },
    { name: 'BBQ & Whiskey esszenciák', href: '#' },
    { name: 'Ajándéktárgyak', href: '#' },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10">
      {/* EGYEDI ANIMÁCIÓ DEFINÍCIÓ */}
      <style jsx global>{`
        @keyframes softGlow {
          0% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.2); border-color: #D4AF37; }
          50% { box-shadow: 0 0 15px rgba(212, 175, 55, 0.4); border-color: #f3e8ff; }
          100% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.2); border-color: #D4AF37; }
        }
        .animate-soft-glow {
          animation: softGlow 4s infinite ease-in-out;
        }
      `}</style>

      <Header />

      {/* 1. HERO BANNER - Maradt a 4cm-es behúzás és a középre igazítás */}
      <section className="w-full bg-white pt-4 pb-0 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[240px] md:h-[320px]">
          
          {/* BAL OLDAL - 4 cm-el beljebb (pl-32) */}
          <div className="flex-1 pl-32 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 mb-2 block italic">Varázslatos Világ</span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-3 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-[11px] md:text-xs text-zinc-500 font-medium mb-6 max-w-xs mx-auto leading-relaxed">
              Válogatott kincsek neked és családodnak. <br/> 
              Szerezd meg az akciós kuponokat!
            </p>
            <button className="bg-black text-white px-8 py-2.5 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
              Kuponok begyűjtése
            </button>
          </div>

          {/* ⚡ ALA / HONEYPOT HIDDEN TRIGGER ⚡ */}
          <div className="w-2 h-2 opacity-0 cursor-default">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Középre igazítva) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[380px] bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-10 rounded-[40px] shadow-[0_15px_40px_rgba(168,85,247,0.2)] transform hover:scale-[1.01] transition-transform cursor-pointer group relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-1">
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-12 bg-white/40 my-4"></div>
                <p className="text-white/90 text-[10px] uppercase tracking-[0.3em] font-black leading-tight">
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

      {/* 2. KATEGÓRIA SÁV - Sötétlila háttér, Pulzáló lila gombokkal */}
      <div className="w-full bg-purple-950 border-y border-purple-900 py-5">
        <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between gap-4">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="flex-1 text-center py-3.5 px-2 rounded-xl transition-all duration-300 
                         bg-purple-600 border-2 border-[#D4AF37] 
                         animate-soft-glow hover:bg-[#D4AF37] hover:border-purple-600 group"
            >
              <span className="text-[15px] font-black uppercase tracking-tighter text-white group-hover:text-black italic">
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Sötétebb szürke kockák */}
      <div className="max-w-[1600px] mx-auto px-6 py-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-300 mb-5 relative overflow-hidden rounded-[2.5rem] border border-zinc-200 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
              </div>
              <div className="px-2 text-center text-zinc-900">
                <h3 className="text-[14px] font-bold leading-tight mb-1 uppercase tracking-tighter">Válogatott Kincs #{i+1}</h3>
                <span className="text-lg font-black italic">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
