'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import Link from 'next/link';
import React from 'react';
const NotFound: React.FC = () => {
  const activeLanguage = useLanguage();
  return (
    <>
      <div className="flex flex-col h-screen text-center px-10 items-center justify-center">
        <h1 className="text-4xl font-bold text-gradient-3">
          {activeLanguage.NOT_FOUND_TITLE}
        </h1>
        <p className="mt-4 text-lg text-white">
          {activeLanguage.NOT_FOUND_DESCRIPTION}
        </p>
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== 'undefined') {
              window.history.back();
            }
          }}
          className="mt-6 bg-purple-700 shadow-2xl font-bold p-2 rounded-md text-white"
        >
          {activeLanguage.NOT_FOUND_BUTTON}
        </Link>
      </div>
    </>
  );
};
export default NotFound;
