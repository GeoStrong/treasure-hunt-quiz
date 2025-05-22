'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import Link from 'next/link';
import React from 'react';
const Oopsie: React.FC = () => {
  const activeLanguage = useLanguage();

  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl text-gradient-2 font-bold text-center">
        {activeLanguage.OOPSIE_PAGE_TITLE}
      </h1>
      <Link
        href="/game/quizz/new-step"
        className="text-2xl bg-purple-800 p-2 rounded-md font-bold text-center mt-5"
      >
        {activeLanguage.OOPSIE_PAGE_BUTTON}
      </Link>
    </div>
  );
};
export default Oopsie;
