'use client';

import React from 'react';
import LanguageSelect from './LanguageSelect';

import Footer from './Footer';
import Support from './Support';

const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="p-8 relative">
      <div className="flex mb-5 justify-between relative left-0 z-10 w-full">
        <Support />
        {/* <Button
          onClick={() => {
            localStorage.clear();
            location.replace('/');
          }}
        >
          Reset
        </Button> */}
        <LanguageSelect />
      </div>
      {children}
      <Footer />
    </div>
  );
};
export default LayoutContainer;
