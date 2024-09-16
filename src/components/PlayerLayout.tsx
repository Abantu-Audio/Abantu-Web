'use client';

import React, { useState } from 'react';
import { Header } from './Header';
import { MainSection } from './MainSection';
import { Footer } from './Footer';

export function PlayerLayout() {
  const [leftWidth, setLeftWidth] = useState(250);
  const [rightWidth, setRightWidth] = useState(300);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <MainSection
        leftWidth={leftWidth}
        setLeftWidth={setLeftWidth}
        rightWidth={rightWidth}
        setRightWidth={setRightWidth}
      />
      <Footer />
    </div>
  );
}
