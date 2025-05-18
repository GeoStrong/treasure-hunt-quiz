'use client';

import React from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const LoadingProgressBar: React.FC = () => {
  return (
    // <div className="fixed top-0 left-0 w-full z-50">
    <ProgressBar height="4px" color="#4880ff" shallowRouting />
    // </div>
  );
};
export default LoadingProgressBar;
