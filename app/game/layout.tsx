'use client';

import LanguageSelect from '@/components/LanguageSelect';
import React, { useEffect } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const team = localStorage.getItem('team');
    if (!team) {
      window.location.href = '/introduction/signup';
    }
  }, []);

  return (
    <div className="w-full mt-10 p-8">
      <div className="flex mb-5 justify-end relative left-0 z-10 w-full">
        <LanguageSelect />
      </div>
      {children}
    </div>
  );
};
export default Layout;
