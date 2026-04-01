'use client';

import Header from '@/components/Header';
import { Playfair_Display, Montserrat } from 'next/font/google';

const feminineFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['italic'] });
const masculineFont = Montserrat({ subsets: ['latin'], weight: ['700', '900'] });

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
      {/* 🛠️ ARANY FÉNY ÉS LEBEGŐ ANIMÁCIÓK */}
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

      {/* FÖLSŐ ARANYOZOTT SÁV - Fényesebb és pulzáló */}
      <div className="w-full h-[3px] animate-gold-shine shadow-[0_0_20px_rgba(212,175,55,0.6)] relative z-50"></div>

      {/* 1. HERO BANNER - 20%-kal kisebb szekció, de 15%-kal nagyobb főcímmel */}
      <section className="w-full bg-white pt-8 pb-4 border-b border-zinc-50 relative">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-row items-center justify-center gap-12 h-[200px] md:h-[260px]">
          
          {/* BAL OLDAL - Apró örömök (+15% méretnövekedés) */}
          <div className="flex-[1.3] pl-32 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-2 block italic">Exkluzív Válogatás</span>
            <h1 className={`${feminineFont.className} text-4xl md:text-[3.6rem] text-zinc-900 leading-[1.1] mb-4 italic`}>
              Apró örömök,<br/>nagy pillanatok.
            </h1>
            <div className="flex justify-center mt-6">
              <button className="bg-black text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-full shadow-lg">
                Kuponok begyűjtése
              </button>
            </div>
          </div>

          <div className="w-4 h-4 opacity-0 pointer-events-none">🐾</div>

          {/* JOBB OLDAL - NEZU JÁTÉKBARLANG (Visszaállítva, 20% kisebb) */}
          <div className="flex-1 flex justify-center pr-12">
            <div className="w-full max-w-[300px] bg-gradient-to-br from-purple-600 to-pink-500 p-7 md:p-9 rounded-[40px] shadow-2xl transform hover:scale-105 transition-transform cursor-pointer relative overflow-hidden border-4 border-white/20 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className={`${feminineFont.className} text-white text-3xl md:text-4xl italic tracking-tighter uppercase mb-1 leading-tight`}>
                  Nezu <br/> Játékbarlang!
                </h2>
