import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="bg-black min-h-screen pt-44 pb-10"> {/* Megnöveltük a felső paddingot a nagyobb fejléc miatt */}
      <Header />

      {/* TERMÉK RÁCS - Marad a rituális 5-ös elosztás */}
      <div className="px-4 grid grid-cols-2 md:grid-cols-5 gap-2">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="border border-red-900/20 bg-[#050505] aspect-[3/4] flex flex-col p-3 transition-all hover:border-red-600/50">
            <div className="flex-1 bg-[#111] mb-2 rounded-sm"></div>
            <div className="h-3 w-3/4 bg-gray-900 mb-2"></div>
            <div className="h-4 w-1/4 bg-gray-800"></div>
          </div>
        ))}
      </div>

      {/* AZ ALSÓ SÁVOT TÖRÖLTÜK, HOGY NE LEGYEN ELIJESZTŐ */}
    </main>
  );
}
