// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  const iconCategories = [
    { name: 'Kicsiknek', color: 'bg-pink-50' }, // Cuki színek
    { name: 'Otthonunk', color: 'bg-blue-50' },
    { name: 'Kedvenceink', color: 'bg-orange-50', icon: '🐾' },
    { name: 'Kerti Party', color: 'bg-green-50' },
    { name: 'Különlegességek', color: 'bg-purple-50' },
    { name: 'Ajándékok', color: 'bg-yellow-50' },
    { name: 'Szuper Akció', color: 'bg-red-50', isSale: true },
  ];

  return (
    <main className="bg-white min-h-screen pt-44">
      <Header />

      {/* 1. HERO BANNER - Habos-babos verzió */}
      <section className="relative w-full h-[350px] md:h-[500px] bg-[#f9f9f9] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10"></div>
        
        <div className="relative z-20 px-10 md:px-24 max-w-2xl text-zinc-800">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400 mb-4 block">Új kollekció érkezett</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Apró örömök,<br/>nagy pillanatok.
          </h1>
          <p className="text-sm md:text-base text-zinc-500 font-medium mb-8 max-w-md">
            Válogatott puhaság és gondoskodás a család minden tagjának. Fedezd fel legújabb kincseinket!
          </p>
          <button className="bg-zinc-900 text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-pink-500 transition-all rounded-full shadow-lg shadow-pink-200">
            Szétnézek a kincsek között
          </button>
        </div>

        {/* Puha, világos háttérkép placeholder (pl. egy cuki plüss vagy textil textúra) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522771917563-ee75ff1f52f7?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
      </section>

      {/* 2. KATEGÓRIA IKONSOR - Lekerekített, pasztell */}
      <div className="bg-white px-4 py-16 flex justify-center overflow-x-auto no-scrollbar gap-8 md:gap-14">
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

      {/* 3. NEZU JÁTÉKBARLANG - Vidám, pasztell lila banner */}
      <div className="mx-4 md:mx-10 rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 py-10 flex flex-col items-center justify-center border-2 border-white shadow-xl shadow-purple-50">
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

      {/* 4. TERMÉKRÁCS - Tiszta, fókuszált */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Legnépszerűbb kincseink</h2>
          <div className="h-[2px] flex-1 mx-8 bg-zinc-100"></div>
          <a href="#" className="text-xs font-bold uppercase text-zinc-400 hover:text-black transition-colors">Összes mutatása</a>
        </div>

        {/* 5-ös rács, most már teljes szélességben (sidebar nélkül) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-zinc-50 mb-4 relative overflow-hidden rounded-2xl border border-zinc-50 transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-sm font-bold text-zinc-800 leading-tight mb-1 group-hover:text-pink-500 transition-colors">Gondosan Válogatott Kincs #{i+1}</h3>
                <p className="text-[11px] text-zinc-400 uppercase tracking-tighter font-medium mb-2">Nezu Selection</p>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-zinc-900">7.990 Ft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
