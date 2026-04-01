'use client';

import Header from '@/components/Header';
// Beimportálunk két különböző világot képviselő betűtípust
import { Playfair_Display, Inter, Montserrat } from 'next/font/google';

const feminineFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '900'], style: 'italic' });
const masculineFont = Montserrat({ subsets: ['latin'], weight: ['900'] });
const standardFont = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`bg-white min-h-screen pt-44 pb-10 overflow-hidden ${standardFont.className}`}>
      <Header />

      {/* 1. LÁGY/NŐIES SZEKCIÓ (Apró örömök) */}
      <section className="relative w-full bg-white z-20 pb-20">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[300px]">
          
          <div className="flex-1 pl-32 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-pink-400 mb-2 block">
              Selection No. 1
            </span>
            {/* Playfair Display - Elegáns, lágy, nőies karakter */}
            <h1 className={`${feminineFont.className} text-4xl md:text-6xl text-zinc-900 leading-none mb-4`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <p className="text-[12px] text-zinc-400 font-medium max-w-xs mx-auto italic">
              Válogatott kincsek a legkisebbeknek.
            </p>
          </div>

          <div className="flex-1 flex justify-center pr-12">
             {/* Játékbarlang kártya - marad a cukimuki lila */}
             <div className="w-full max-w-[340px] bg-gradient-to-br from-purple-500 to-pink-500 p-10 rounded-[50px] shadow-2xl text-center border-4 border-white">
                <h2 className={`${feminineFont.className} text-white text-4xl italic`}>Nezu Játék</h2>
                <div className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full text-[10px] font-black uppercase">Belépés</div>
             </div>
          </div>
        </div>

        {/* 🌊 A VÍZESÉS ÁTMENET */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[90%] z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-zinc-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,155.47-9.23,326,92.89,481.5,84.5,148.6-8,255-89.8,353.7-93.5V0Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. ERŐS/FÉRFIAS SZEKCIÓ (Termékek) */}
      <section className="bg-zinc-50 pt-32 pb-20 relative z-0">
        <div className="max-w-[1600px] mx-auto px-6">
          
          <div className="flex flex-col items-center mb-16">
            {/* Montserrat Black - Maszkulin, nehéz, ipari karakter */}
            <h2 className={`${masculineFont.className} text-6xl md:text-8xl text-zinc-200 uppercase tracking-tighter absolute -top-10 opacity-50 select-none`}>
              Inventory
            </h2>
            <div className="relative z-10 flex items-center gap-4">
               <div className="h-[2px] w-12 bg-zinc-900"></div>
               <span className={`${masculineFont.className} text-zinc-900 text-xl uppercase tracking-widest`}>The Collection</span>
               <div className="h-[2px] w-12 bg-zinc-900"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="group cursor-pointer">
                {/* Sötétebb, maszkulinabb kockák */}
                <div className="aspect-[3/4] bg-zinc-400 mb-4 rounded-xl border-b-8 border-zinc-500 transition-all group-hover:border-purple-600 group-hover:-translate-y-2"></div>
                
                {/* Termék feliratok - Férfiasabb, tömörebb stílusban */}
                <div className="text-left">
                  <h3 className={`${masculineFont.className} text-[12px] text-zinc-900 uppercase leading-none mb-2`}>
                    Mechanical Item #{i+1}
                  </h3>
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-black text-zinc-900 italic tracking-tighter">12.490 Ft</span>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase">Details +</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REJTETT ALA LÁBJEGYZET */}
      <footer className="text-center py-10 opacity-10">
        <span className="text-[10px] uppercase tracking-[1em]">Nezu Protocol - ALA Access Terminal</span>
      </footer>
    </main>
  );
}
