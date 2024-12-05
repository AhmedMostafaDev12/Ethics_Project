import React from 'react';
import { Building2 } from 'lucide-react';

export function Hero({ onShowPrinciples }: { onShowPrinciples: () => void }) {
  return (
    <div className="relative min-h-[100dvh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 to-sky-800/70" />
      </div>

      <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white">
        <Building2 className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 md:mb-8 text-sky-300" />
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            JSCE
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-sky-200 font-medium">
            Japanese Society for Civil Engineering
          </p>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold text-sky-300">
            Code of Ethics
          </p>
        </div>
        <p className="text-sm sm:text-base md:text-xl max-w-[280px] sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8 md:mb-12 text-sky-100">
          Nine foundational principles guiding the professional conduct and 
          responsibilities of civil engineers, ensuring excellence, integrity, 
          and sustainable development.
        </p>
        <button
          onClick={onShowPrinciples}
          className="w-[280px] sm:w-auto bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold 
                   hover:bg-sky-400 transition-all duration-200 
                   transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          Explore the Principles
        </button>
      </div>
    </div>
  );
}