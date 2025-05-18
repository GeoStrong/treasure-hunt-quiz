'use client';

import LayoutContainer from '@/components/LayoutContainer';
import React, { useEffect } from 'react';

const GameLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const team = localStorage.getItem('team');
    if (!team) {
      window.location.href = '/introduction/signup';
    }
  }, []);

  return <LayoutContainer>{children}</LayoutContainer>;
};
export default GameLayout;
