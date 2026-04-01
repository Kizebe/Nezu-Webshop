// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  const iconCategories = [
    { name: 'Gyerek', color: 'bg-zinc-200' },
    { name: 'Otthon', color: 'bg-zinc-300' },
    { name: 'Pet Shop', color: 'bg-zinc-200', icon: '🐾' },
    { name: 'BBQ', color: 'bg-zinc-300' },
    { name: 'Whiskey', color: 'bg-zinc-200' },
    { name: 'Ajándék', color: 'bg-zinc-300' },
    { name: 'Akció', color: 'bg-red-100', isSale: true },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10">
      <Header />

      {/* 1. KATEGÓRIA IKONSOR - Sötétebb szürke háttéren */}
      <div className="bg-zinc-100 border-b border-zinc-200">
        <div className="px-4 py-8 flex justify-center overflow-x-auto no-scrollbar gap-6 md:gap-10">
          {iconCategories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${cat.color} flex items-center justify-center transition-all group-hover:scale-105 shadow-sm border border-white/50`}>
                {cat.icon ? <span className="text-2xl">{cat.icon}</span> : <div className="w-10 h-10 bg-white/30 rounded-full"></div>}
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-tighter ${cat.isSale ? 'text-red-600' : 'text-zinc-600'}`}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. NEZU JÁTÉKBARLANG - Fekete háttér, Arany felirat */}
      <div className="bg-black w-full py-6 flex flex-col items-center justify-center border-y border-zinc-800 my-2">
        <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-black italic tracking-[0.3em] uppercase animate-pulse">
          Nezu Játékbarlang!
        </h2>
        <p className="text-[#D4AF37]/60 text-[10px] uppercase tracking-[0.5em] mt-2 font-bold">
          Rituális pontgyűjtés & exkluzív ranguaknak
        </p>
      </div>

      {/* 3. TERMÉKRÁCS ÉS OLDALSÁV - Fehér környezetben */}
      <div className="px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-10 bg-white">
        
        {/* BAL OLDAL: A 25-ös rács (tisztított verzió) */}
        <div className="flex-[3.5]">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-zinc-50 mb-3 relative overflow-hidden rounded-sm border border-zinc-100 group-hover:shadow-lg transition-shadow">
                  {/* NINCS FORRÁSMEGJELÖLÉS */}
                  <div className="absolute top-2 left-2 text-[8px] uppercase tracking-widest text-zinc-300 font-bold">
                    Nezu Original
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[11px] font-bold text-zinc-800 uppercase tracking-tighter">Exkluzív Termék #{i+1}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-black">6.990 Ft</span>
                    <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-xs text-zinc-400 group-hover:bg-black group-hover:text-white transition-colors">+</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JOBB OLDAL: Visual Nodes & Preview */}
        <div className="flex-1 space-y-8 min-w-[320px]">
          <div className="border border-zinc-100 bg-zinc-50 p-6 rounded-sm">
            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-4">Szinergia Háló</h4>
            <div className="aspect-square bg-white border border-zinc-200 flex items-center justify-center rounded-sm">
              <span className="text-[9px] text-zinc-300 uppercase italic">Elemzés folyamatban...</span>
            </div>
          </div>

          {/* Kiemelt kártya - Forrásmegjelölés törölve! */}
          <div className="border-4 border-black bg-white p-6 shadow-[-20px_20px_0px_rgba(0,0,0,0.05)]">
            <div className="aspect-video bg-zinc-100 mb-6 border border-zinc-200"></div>
            <h4 className="text-sm font-black text-black mb-2 uppercase italic">A Kiválasztott Rituálé</h4>
            <p className="text-[10px] text-zinc-500 mb-8 leading-relaxed uppercase tracking-tight">
              Tökéletes mechanika, sallangmentes kivitelezés. A minőség, ami önmagáért beszél.
            </p>
            <button className="w-full bg-black text-white py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
              Felfedezés
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
