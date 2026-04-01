// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  const iconCategories = [
    { name: 'Kicsiknek', color: 'bg-pink-50' }, 
    { name: 'Otthonunk', color: 'bg-blue-50' },
    { name: 'Kedvenceink', color: 'bg-orange-50', icon: '🐾' },
    { name: 'Kerti Party', color: 'bg-green-50' },
    { name: 'Különlegességek', color: 'bg-purple-50' },
    { name: 'Ajándékok', color: 'bg-yellow-50' },
    { name: 'Szuper Akció', color: 'bg-red-50', isSale: true },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10">
      <Header />

      {/* 1. HERO BANNER - Integrált Lila Játékbarlanggal */}
      <section className="relative w-full h-[320px] md:h-[450px] bg-white overflow-hidden flex items-center border-b border-zinc-50">
        
        {/* A TARTALOM SZÉLESSÉGE */}
        <div className="relative z-20 max-w-[1600px] mx-auto w-full px-6 md:px-16 flex flex-row items-center justify-between gap-6">
          
          {/* BAL OLDAL - Brand & Kuponok */}
          <div className="flex-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-3 block italic">Varázslatos Világ</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-xs md:text-sm text-zinc-500 font-medium mb-8 max-w-sm leading-relaxed">
              Válogatott kincsek a család minden tagjának. Fedezd fel a kínálatot, és szerezd meg az akciós kuponokat!
            </p>
            <button className="bg-zinc-900 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-pink-500 transition-all rounded-full shadow-lg shadow-zinc-100">
              Kuponok begyűjtése
            </button>
          </div>

          {/* ⚡ HONEYPOT / ALA REJTETT TRIGGER A KÉT OLDAL KÖZÖTT ⚡ */}
          <span className="text-[1px] opacity-0 cursor-default select-none pointer-events-none mx-4">🐾</span>

          {/* JOBB OLDAL - A LILA JÁTÉKBARLANG KÁRTYA */}
          <div className="flex-1 flex justify-end">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(168,85,247,0.3)] transform hover:scale-[1.02] transition-transform cursor-pointer group max-w-sm relative overflow-hidden border-4 border-white/20">
              
              {/* Csillogás effekt a kártyán */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-2">
                  Nezu <br/> Játékbarlang!
                </h2>
                <div className="h-[2px] w-12 bg-white/40 my-5"></div>
                <p className="text-white/90 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black leading-relaxed">
                  Gyűjts XP-t, lépj szinteket <br/> és váltsd be ajándékokra!
                </p>
                <div className="mt-8 flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
                  <span className="bg-white text-purple-600 px-3 py-1 rounded-full">Belépés</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Háttér dekoráció - Nagyon halvány cukimuki textúra */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-5"></div>
      </section>

      {/* 2. KATEGÓRIA IKONSOR */}
      <div className="bg-white px-4 py-12 flex justify-center overflow-x-auto no-scrollbar gap-8 md:gap-14">
        {iconCategories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className={`w-14 h-14 md:w-18 md:h-18 rounded-full ${cat.color} flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border-2 border-white`}>
              {cat.icon ? <span className="text-2xl">{cat.icon}</span> : <div className="w-8 h-8 bg-white/30 rounded-full"></div>}
            </div>
            <span className="text-[10px] font-black uppercase tracking-tight text-zinc-500 group-hover:text-black">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* 3. TERMÉKRÁCS - 5-ös elosztás */}
      <div className="max-w-[1600px] mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-black uppercase tracking-tighter text-zinc-900 italic">Nezu Válogatás</h2>
          <div className="h-[1px] flex-1 mx-8 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-50 mb-4 relative overflow-hidden rounded-2xl border border-zinc-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)]">
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-sm font-bold text-zinc-800 leading-tight mb-1 group-hover:text-purple-600 transition-colors">Exkluzív Kincs #{i+1}</h3>
                <span className="text-base font-black text-zinc-900 italic tracking-tighter">8.490 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
