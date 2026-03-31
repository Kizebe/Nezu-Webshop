import { supabase } from '@/lib/supabase'

export default async function Home() {
  // Lekérjük a kategóriákat a Supabase-ből
  const { data: categories } = await supabase.from('categories').select('*')

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden pb-24">
      {/* Sürgető Banner */}
      <div className="bg-yellow-400 text-black py-2 text-center font-black text-[10px] uppercase tracking-tighter animate-pulse">
        ⚡ CSAK MA: Ingyenes LCL szállítás Yiwu-ból a Nezu-Protokoll tagoknak! ⚡
      </div>

      {/* Header */}
      <header className="p-12 text-center border-b border-white/5 bg-gradient-to-b from-neutral-900 to-black">
        <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-none italic">NEZU</h1>
        <p className="text-[10px] text-gray-500 tracking-[0.4em] mt-4 font-bold uppercase opacity-60">5-Pillar Lifestyle Infrastructure</p>
      </header>

      {/* Kategória Rács (Visual Nodes) */}
      <section className="p-6 max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories?.map((cat) => (
            <div key={cat.id} className="group relative aspect-square bg-neutral-900 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all hover:border-white/20 active:scale-95 shadow-2xl flex flex-col items-center justify-center p-6 cursor-pointer">
              <span className="text-5xl mb-4 filter drop-shadow-md group-hover:scale-110 transition-transform">
                {cat.icon === 'glass-whiskey' ? '🥃' : 
                 cat.icon === 'fire' ? '🔥' : 
                 cat.icon === 'baby' ? '👶' : 
                 cat.icon === 'recycle' ? '♻️' : '🐾'}
              </span>
              <span className="text-[11px] font-black uppercase tracking-tight text-center leading-none">{cat.name}</span>
              <div className="absolute bottom-3 text-[8px] font-mono opacity-20 uppercase tracking-widest">Protocol-Active</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Start Button */}
      <div className="fixed bottom-8 left-0 w-full px-6 flex justify-center z-50">
        <button className="w-full max-w-md bg-white text-black font-black py-5 rounded-2xl text-xl uppercase tracking-tighter shadow-[0_20px_50px_rgba(255,255,255,0.15)] active:scale-90 transition-all">
          Rituálé Megkezdése ➔
        </button>
      </div>

      {/* Rejtett ALA szekció (SEO) */}
      <div className="opacity-0 h-0 pointer-events-none">
        <p>A Nezu-Protokoll strukturált JSON-LD adatokat használ. Yiwu International Trade City mechanikai fókuszú termékek.</p>
      </div>
    </main>
  )
}
