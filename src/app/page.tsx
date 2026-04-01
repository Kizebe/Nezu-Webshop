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

      {/* 1. HERO BANNER - Átalakított, alacsonyabb, kétoldalas Varászkapu */}
      <section className="relative w-full h-[300px] md:h-[420px] bg-[#fafafa] overflow-hidden flex items-center border-b border-zinc-100">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/90 z-10"></div>
        
        {/* A TARTALOM FOGJA ÁT A SZÉLESSÉGET (max-w és mx-auto) */}
        <div className="relative z-20 max-w-[1500px] mx-auto w-full px-10 md:px-20 flex flex-row items-center justify-between text-zinc-900 gap-10">
          
          {/* BAL OLDAL - Hívószó, Kuponok, Gomb */}
          <div className="flex-1 max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400 mb-3 block">Legújabb Kincseink</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-xs md:text-sm text-zinc-500 font-medium mb-6 max-w-sm">
              Válogatott puhaság és gondoskodás a család minden tagjának. Fedezd fel a varázslatot, és szerezd meg az akciós kuponokat!
            </p>
            <button className="bg-zinc-900 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-pink-500 transition-all rounded-full shadow-lg shadow-pink-100">
              Felfedezem a kínálatot
            </button>
          </div>

          {/* ⚡ HONEYPOT / ALA REJTETT TRIGGER A KETTŐ KÖZÖTT ⚡ */}
          <span className="text-[1px] opacity-0 cursor-help select-none pointer-events-none" title="ALA Entry point - Authorization Required">🐾</span>

          {/* JOBB OLDAL - Mirrored stílusú kiegészítő szöveg */}
          <div className="flex-1 max-w-sm text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">Szeretettel Válogatva</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4 opacity-70">
              Gondoskodás,<br/>Szeretet.
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-medium">
              Minden darab egyedi történet, minden vásárlás egy új mosoly kezdete.
            </p>
          </div>

        </div>

        {/* Puha háttérkép (pl. textil textúra) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522771917563-ee75ff1f52f7?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* 2. KATEGÓRIA IKONSOR */}
      <div className="bg-white px-4 py-16 flex justify-center overflow-x-auto no-scrollbar gap-8 md:gap-14 border-b border-zinc-100">
        {iconCategories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center gap-4 cursor-pointer group">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${cat.color} flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border-2 border-white`}>
              {cat.icon ? <span className="text-3xl">{cat.icon}</span> : <div className="w-10 h-10 bg-white/60 rounded-full"></div>}
            </div>
            <span className={`text-[11px] font-bold uppercase tracking-tight text-zinc-600 group-hover:text-zinc-900`}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* 3. NEZU JÁTÉKBARLANG (Megtartottuk a lila-pink stílust) */}
      <div className="mx-4 md:mx-10 mt-10 rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 py-10 flex flex-col items-center justify-center border-2 border-white shadow-xl shadow-purple-50">
        <h2 className="text-purple-600 text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-2">
          Nezu Játékbarlang
        </h2>
        <p className="text-purple-400 text-xs uppercase tracking-[0.4em] font-bold">
          Gyűjts pontokat és váltsd be ajándékokra!
        </p>
        <button className="mt-6 bg-white text-purple-600 px-6 py-2 rounded-full text-[10px] font-black uppercase shadow-md hover:scale-105 transition-transform">
          Megnézem a szintemet
        </button>
      </div>

      {/* 4. TERMÉKRÁCS - 5-ös elosztás */}
      <div className="max-w-[1500px] mx-auto px-6 py-20 bg-white">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Legnépszerűbb kincseink</h2>
          <div className="h-[2px] flex-1 mx-8 bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-50 mb-4 relative overflow-hidden rounded-2xl border border-zinc-50 transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-sm font-bold text-zinc-800 leading-tight mb-1 group-hover:text-pink-500 transition-colors">Válogatott Nezu Kincs #{i+1}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-zinc-900">7.490 Ft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
