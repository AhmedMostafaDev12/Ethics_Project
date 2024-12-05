import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PrinciplesList } from './components/PrinciplesList';
import { PrincipleDetail } from './components/PrincipleDetail';

function App() {
  const [view, setView] = useState<'home' | 'list' | 'detail'>('home');
  const [selectedPrinciple, setSelectedPrinciple] = useState<number>(1);

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Hero onShowPrinciples={() => setView('list')} />;
      case 'list':
        return (
          <PrinciplesList 
            onBack={() => setView('home')}
            onSelectPrinciple={(id) => {
              setSelectedPrinciple(id);
              setView('detail');
            }}
          />
        );
      case 'detail':
        return (
          <PrincipleDetail
            principleId={selectedPrinciple}
            onBack={() => setView('list')}
          />
        );
    }
  };

  return <div className="min-h-screen">{renderView()}</div>;
}

export default App;