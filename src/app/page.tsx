'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat, Bebas_Neue } from 'next/font/google';

const feminineFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['italic'] });
const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });
const arcadeFont = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const categories = [
    { name: 'Gyerekruházat', href: '#' },
    { name: 'Otthon és lakberendezés', href: '#' },
    { name: 'Pet Shop 🐾', href: '#' },
    { name: 'BBQ & Whiskey esszenciák', href: '#' },
    { name: 'Ajándéktárgyak', href: '#' },
  ];

  return (
    <main className="bg-white min-h-screen pt-44 pb-10 overflow-hidden relative">
      {/* 🛠️ ARANY FÉNY ÉS PULZÁLÁS ANIMÁCIÓK */}
      <style>{`
        @keyframes goldShine {
          0% { background-position: -200% center; opacity: 0.8; }
          50% { opacity: 1; }
          100% { background-position: 200% center; opacity: 0.8; }
        }
        .animate-gold-shine {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF5D1 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: goldShine 3s infinite linear;
        }
        @keyframes subtleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .floating-island {
          animation: subtleFloat 4s infinite ease-in-out;
        }
      `}</style>

      <Header />

      {/* FELSŐ ARANYOZOTT SÁV - Pulzáló, fényes szegély */}
      <div className="w-full h-1 animate-gold-shine shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>

      {/* 1. HERO BANNER - 20%-kal kisebb arányok */}
      <section className="w-full bg-white pt-6 pb-4 border-b border-zinc-50 relative">
        <div className="max-w-[1400px] mx-auto px-12 flex flex-row items-center justify-center gap-10 h-[200px] md:h-[240px]">
          
          {/* BAL OLDAL - Apró örömök (pl-32 behúzás marad) */}
          <div className="flex-1 pl-32 text-center scale-90">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-pink-500 mb-1 block italic">Exkluzív Válogatás</span>
            <h1 className={`${feminineFont.className} text-2xl md:text-4xl text-zinc-900 leading-tight mb-2 italic`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center mt-4">
              <button className="bg-black text-white px-6 py-2 text-[8px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full">
                Kuponok
              </button>
            </div>
          </div>

          <div className="w-4 h-4 opacity-0 pointer-events-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (20% kisebb, új betűtípussal) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[290px] bg-gradient-to-br from-purple-600 to-pink-500 p-6 md:p-8 rounded-[35px] shadow-xl transform hover:scale-105 transition-transform cursor-pointer relative overflow-hidden border-2 border-white/30 text-center">
              <div className="relative z-10 flex flex-col items-center">
                {/* Bebas Neue - Ütősebb, modernebb játék-hangulat */}
                <h2 className={`${arcadeFont.className} text-white text-4xl md:text-5xl tracking-normal leading-none mb-1`}>
                  Nezu <br/> Játékbarlang
                </h2>
                <div className="h-[1px] w-10 bg-white/40 my-3"></div>
                <div className="inline-block bg-white text-purple-600 px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">
                  Belépés
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEBEGŐ ABLAKOS MENÜ - Szisztematikus, lágy haladás */}
      <div className="relative z-30 -translate-y-6">
        <nav className="max-w-[1100px] mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.href}
              className="px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-100 shadow-lg hover:shadow-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all duration-500 floating-island"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <span className={`${masculineFont.className} text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-purple-700`}>
                {cat.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 3. TERMÉKRÁCS - Montserrat karakterrel */}
      <div className="max-w-[1500px] mx-auto px-6 py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[4/5] w-full bg-zinc-300/60 mb-4 relative overflow-hidden rounded-[2.5rem] border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              </div>
              <div className="px-2 text-center">
                <h3 className={`${masculineFont.className} text-[11px] text-zinc-800 leading-tight mb-1 uppercase tracking-tight`}>
                  Nezu Item #{i+1}
                </h3>
                <span className="text-md font-black text-zinc-900 italic">9.990 Ft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
