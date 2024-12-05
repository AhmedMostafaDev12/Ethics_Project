import React from 'react';
import { ArrowLeft } from 'lucide-react';
import * as icons from 'lucide-react';
import { principles } from '../data/principles';

interface PrinciplesListProps {
  onBack: () => void;
  onSelectPrinciple: (id: number) => void;
}

export function PrinciplesList({ onBack, onSelectPrinciple }: PrinciplesListProps) {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-sky-900 to-sky-800 py-4 sm:py-6 md:py-12 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-sky-300 hover:text-sky-200 mb-4 sm:mb-6 md:mb-8 
                   transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Home
        </button>
        
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
          Nine Principles of
          <span className="block text-sky-300 mt-1 sm:mt-2">JSCE Code of Ethics</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {principles.map((principle) => {
            const IconComponent = icons[principle.icon as keyof typeof icons];
            return (
              <button
                key={principle.id}
                onClick={() => onSelectPrinciple(principle.id)}
                className="bg-sky-800/50 rounded-xl shadow-lg p-3 sm:p-4 md:p-6 text-left
                         hover:bg-sky-700/50 transition-all duration-200
                         transform hover:scale-[1.02] border border-sky-700/50
                         hover:border-sky-300/50 group"
              >
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-sky-300/10 flex items-center 
                              justify-center group-hover:bg-sky-300/20 transition-colors duration-200">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-300" />
                  </div>
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-white ml-2 sm:ml-3 md:ml-4">
                    Principle {principle.id}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-sky-300">
                  {principle.title}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}