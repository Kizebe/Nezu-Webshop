// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  // A rituális kategóriák az ikonsorhoz
  const iconCategories = [
    { name: 'Gyerek', color: 'bg-slate-100' },
    { name: 'Otthon', color: 'bg-blue-50' },
    { name: 'Pet Shop', color: 'bg-slate-100', icon: '🐾' },
    { name: 'BBQ', color: 'bg-blue-50' },
    { name: 'Whiskey', color: 'bg-slate-100' },
    { name: 'Ajándék', color: 'bg-blue-50' },
    { name: 'Akció', color: 'bg-red-50', isSale: true },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10"> {/* FEHÉR HÁTTÉR */}
      <Header />

      {/* SHEIN-STÍLUSÚ KATEGÓRIA IKONSOR */}
      <div className="px-4 py-8 flex justify-center overflow-x-auto no-scrollbar gap-4 md:gap-8 bg-white border-b border-gray-100">
        {iconCategories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
            {/* Kör alakú ikon helye halvány háttérrel */}
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${cat.color} flex items-center justify-center transition-transform group-hover:scale-105 border border-gray-100 shadow-sm`}>
              {cat.icon ? (
                <span className="text-2xl">{cat.icon}</span>
              ) : (
                <div className="w-10 h-10 bg-white/50 rounded-full"></div> /* Placeholder kép helyett */
              )}
            </div>
            <span className={`text-[11px] font-bold uppercase tracking-tighter ${cat.isSale ? 'text-red-600' : 'text-gray-700'}`}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      <div className="px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* BAL OLDAL: A 5x5-ös Termékrács - Tisztább verzió */}
        <div className="flex-[3.5]">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="group border border-gray-100 bg-white p-0 transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[3/4] bg-slate-50 mb-3 relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-black/5 text-[8px] px-1 uppercase tracking-widest text-gray-400">
                    Nezu Mech
                  </div>
                </div>
                <div className="p-3 space-y-1 text-black">
                  <h3 className="text-[12px] font-medium leading-tight text-gray-800 uppercase tracking-tighter">Termék megnevezése</h3>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-black italic">5.490 Ft</span>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JOBB OLDAL: Visual Nodes & Preview - Fehér háttérhez igazítva */}
        <div className="flex-1 space-y-6 min-w-[300px]">
          <div className="border border-gray-100 bg-slate-50 p-5 rounded-lg">
            <h4 className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4">Visual Nodes System</h4>
            <div className="aspect-square bg-white border border-gray-200 rounded-lg shadow-inner flex items-center justify-center">
              <span className="text-[9px] text-gray-400 uppercase tracking-widest">Szinergiák elemzése...</span>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-5 shadow-2xl">
            <div className="aspect-video bg-slate-100 mb-4"></div>
            <h4 className="text-sm font-black text-black mb-2 uppercase">Kiemelt Ajánlat</h4>
            <p className="text-[10px] text-gray-600 mb-6 leading-relaxed">
              A tisztaság és mechanika rituáléja. Válogatott minőség Yiwu szívéből.
            </p>
            <button className="w-full bg-black text-white py-3 text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-colors">
              Részletek megtekintése
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
