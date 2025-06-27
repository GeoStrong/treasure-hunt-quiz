'use client';

import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import useLanguage from '@/lib/hooks/useLanguage';
import Statistics from '@/components/Statistics';
import { useAppSelector } from '@/lib/store/hooks';

const Congratulations: React.FC = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);
  const activeLanguage = useLanguage();
  const { profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeRef.current?.innerText?.includes('🚀')) {
        clearInterval(interval);
        setIsMapVisible(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <>
        <TypeAnimation
          key={`${
            activeLanguage.CONGRATULATIONS_PAGE_TITLE
          } ${profile.name.toLocaleUpperCase()}`}
          sequence={[
            `${
              activeLanguage.CONGRATULATIONS_PAGE_TITLE
            } ${profile.name.toLocaleUpperCase()}`,
          ]}
          wrapper="h1"
          className="text-3xl text-gradient-2 font-bold text-center"
          cursor={true}
          speed={70}
        />
        <TypeAnimation
          ref={typeRef}
          key={activeLanguage.CONGRATULATIONS_PAGE_DESCRIPTION}
          sequence={[1000, activeLanguage.CONGRATULATIONS_PAGE_DESCRIPTION]}
          speed={70}
          cursor={false}
          wrapper="p"
          className="text-lg text-gradient-1 text-center mt-4"
        />
        <TypeAnimation
          key={activeLanguage.CONGRATULATIONS_PAGE_TIP}
          sequence={[6000, activeLanguage.CONGRATULATIONS_PAGE_TIP]}
          speed={70}
          cursor={false}
          wrapper="p"
          className="text-center text-gradient-4 mt-2 italic"
        />
        <AnimatePresence initial={false}>
          {isMapVisible ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5"
            >
              <Statistics />
              <div className="text-center mt-4">
                <button
                  onClick={() => {
                    localStorage.clear();
                    location.replace('/');
                  }}
                  className="gradient-1 text-white px-4 py-2 rounded-md hover:bg-gradient-2 transition-colors duration-300"
                >
                  Start New Game
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>
    </div>
  );
};
export default Congratulations;
