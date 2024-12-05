import React from 'react';
import { ArrowLeft } from 'lucide-react';
import * as icons from 'lucide-react';
import { principles } from '../data/principles';

interface PrincipleDetailProps {
  principleId: number;
  onBack: () => void;
}

export function PrincipleDetail({ principleId, onBack }: PrincipleDetailProps) {
  const principle = principles.find(p => p.id === principleId)!;
  const IconComponent = icons[principle.icon as keyof typeof icons];

  return (
    <div className="min-h-[100dvh] bg-sky-900">
      <div 
        className="h-[25vh] sm:h-[30vh] md:h-[40vh] relative bg-cover bg-center"
        style={{ backgroundImage: `url("${principle.image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-sky-900" />
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-sky-300 
                     transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Principles
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 -mt-12 sm:-mt-16 md:-mt-20 relative">
        <div className="bg-sky-800/50 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-sky-700/50">
          <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl bg-sky-300/10 flex items-center justify-center">
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-sky-300" />
            </div>
            <div className="ml-3 sm:ml-4 md:ml-6">
              <div className="text-sm sm:text-base text-sky-300 font-medium mb-0.5 sm:mb-1">
                Principle {principle.id}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {principle.title}
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-sky-100">
            {principle.description}
          </p>
        </div>
      </div>
    </div>
  );
}