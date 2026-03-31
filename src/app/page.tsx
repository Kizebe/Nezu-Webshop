import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <Header />

      {/* TERMÉK RÁCS - 5 oszlopos elrendezés (desktopon) */}
      <div className="px-2 grid grid-cols-2 md:grid-cols-5 gap-1.5">
        
        {/* Egy üres cella példa, amilyen a rajzodon a piros box volt */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="border border-red-900/30 bg-[#050505] aspect-[3/4] flex flex-col p-2">
            <div className="flex-1 bg-[#111] mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-900 mb-1"></div>
            <div className="h-4 w-1/2 bg-gray-800"></div>
          </div>
        ))}
      </div>

      {/* FIX ALSÓ SÁV (Sticky Bar) */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-900 p-3 flex gap-2">
        <button className="flex-1 bg-white text-black text-xs font-black py-3 uppercase tracking-tighter">
          Kosárba
        </button>
        <button className="flex-1 bg-green-600 text-white text-xs font-black py-3 uppercase tracking-tighter">
          Fizetés
        </button>
      </div>
    </main>
  );
}
