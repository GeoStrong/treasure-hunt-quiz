'use client';

import React from 'react';
import LanguageSelect from './LanguageSelect';
// import { Button } from './ui/button';

const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="p-8 relative">
      <div className="flex mb-5 justify-end relative left-0 z-10 w-full">
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
    </div>
  );
};
export default LayoutContainer;
