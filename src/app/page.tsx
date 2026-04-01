// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  const iconCategories = [
    { name: 'Kicsiknek', color: 'bg-zinc-100' }, 
    { name: 'Otthonunk', color: 'bg-zinc-200' },
    { name: 'Kedvenceink', color: 'bg-zinc-100', icon: '🐾' },
    { name: 'Kerti Party', color: 'bg-zinc-200' },
    { name: 'Különlegességek', color: 'bg-zinc-100' },
    { name: 'Ajándékok', color: 'bg-zinc-200' },
    { name: 'Szuper Akció', color: 'bg-red-50', isSale: true },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10">
      <Header />

      {/* 1. HERO BANNER - Kompakt, kétpólusú Varázskapu */}
      <section className="relative w-full h-[280px] md:h-[380px] bg-white overflow-hidden flex items-center border-b border-zinc-100">
        
        {/* A TARTALOM FOGJA ÁT A SZÉLESSÉGET */}
        <div className="relative z-20 max-w-[1600px] mx-auto w-full px-6 md:px-16 flex flex-row items-center justify-between gap-4">
          
          {/* BAL OLDAL - Brand & Kuponok */}
          <div className="flex-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-2 block">Exkluzív Ajánlat</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4 text-zinc-900">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-xs md:text-sm text-zinc-500 font-medium mb-6 max-w-sm">
              Fedezd fel válogatott kincseinket, és szerezd meg az azonnali akciós kuponokat!
            </p>
            <button className="bg-black text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
              Kuponok begyűjtése
            </button>
          </div>

          {/* ⚡ HONEYPOT / ALA REJTETT TRIGGER ⚡ */}
          <span className="text-[1px] opacity-0 cursor-default select-none pointer-events-none">🐾</span>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Beépítve a bannerbe) */}
          <div className="flex-1 flex justify-end">
            <div className="bg-black p-8 md:p-12 rounded-3xl border-2 border-[#D4AF37]/30 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform cursor-pointer group max-w-sm">
              <h2 className="text-[#D4AF37] text-2xl md:text-4xl font-black italic tracking-tighter uppercase mb-2 group-hover:scale-105 transition-transform">
                Nezu <br/> Játékbarlang!
              </h2>
              <div className="h-[1px] w-12 bg-[#D4AF37]/50 my-4"></div>
              <p className="text-[#D4AF37]/70 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold leading-relaxed">
                Lépj be a szintek világába, <br/> gyűjts XP-t az ajándékokért!
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest animate-pulse">
                <span>Belépés</span>
                <span>→</span>
              </div>
            </div>
          </div>

        </div>

        {/* Háttér dekoráció - Halvány, tiszta */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </section>

      {/* 2. KATEGÓRIA IKONSOR - Közvetlenül a banner alatt */}
      <div className="bg-white px-4 py-12 flex justify-center overflow-x-auto no-scrollbar gap-8 md:gap-14 border-b border-zinc-50">
        {iconCategories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className={`w-14 h-14 md:w-18 md:h-18 rounded-full ${cat.color} flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border-2 border-white`}>
              {cat.icon ? <span className="text-2xl">{cat.icon}</span> : <div className="w-8 h-8 bg-white/40 rounded-full"></div>}
            </div>
            <span className="text-[10px] font-black uppercase tracking-tight text-zinc-500 group-hover:text-black">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* 3. TERMÉKRÁCS - Most már tiszta, zavaró banner nélkül */}
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-black uppercase tracking-tighter text-zinc-900 italic">Válogatott Kincseink</h2>
          <div className="h-[1px] flex-1 mx-8 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-50 mb-4 relative overflow-hidden rounded-2xl border border-zinc-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)]">
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-sm font-bold text-zinc-800 leading-tight mb-1 group-hover:text-pink-500 transition-colors">Nezu Selection #{i+1}</h3>
                <span className="text-base font-black text-zinc-900 italic">8.290 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
