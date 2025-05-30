'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import useLanguage from '@/lib/hooks/useLanguage';
import Link from 'next/link';

const Introduction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);
  const activeLanguage = useLanguage();
  const [hrefLink, setHrefLink] = useState('/introduction/signup');

  useEffect(() => {
    const team = localStorage.getItem('team');
    if (team) {
      setHrefLink('/game');
    } else return;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeRef.current?.innerText?.includes('🚀')) {
        clearInterval(interval);
        setIsVisible(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col relative z-10 items-center justify-center gap-3">
      <TypeAnimation
        key={activeLanguage.INTRODUCTION_PAGE_TITLE}
        sequence={[activeLanguage.INTRODUCTION_PAGE_TITLE]}
        wrapper="h1"
        className="text-4xl text-gradient-2 font-bold text-center"
        cursor={false}
      />
      <TypeAnimation
        key={activeLanguage.INTRODUCTION_PAGE_DESCRIPTION}
        ref={typeRef}
        sequence={[3000, activeLanguage.INTRODUCTION_PAGE_DESCRIPTION]}
        speed={70}
        cursor={true}
        wrapper="p"
        className="text-2xl text-gradient-5 font-bold text-center mt-4"
        style={{ display: 'block' }}
      />

      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={hrefLink}>
              <Button
                variant="default"
                className="mt-4 bo cursor-pointer z-40 hover:scale-110 py-6 px-16 text-white text-xl gradient-3 font-bold text-center"
              >
                {activeLanguage.INTRODUCTION_PAGE_PLAY_BUTTON}
              </Button>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default Introduction;
