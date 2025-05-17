'use client';

import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ModelsLoading from '@/components/ModelsLoading';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import useLanguage from '@/lib/hooks/useLanguage';
import CanvasContainer from '@/components/CanvasContainer';
import { useProgress } from '@react-three/drei';
import LanguageSelect from '@/components/LanguageSelect';

export default function Home({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);
  const { progress } = useProgress();
  const activeLanguage = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeRef.current?.innerText?.includes('🚀')) {
        clearInterval(interval);
        setIsVisible(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [progress]);

  return (
    <div className="mt-10 p-8 relative">
      <div className="flex mb-5 justify-end relative left-0 z-10 w-full">
        <LanguageSelect />
      </div>
      {loading && <ModelsLoading />}
      {!loading && (
        <div className="flex flex-col relative z-10 items-center justify-center gap-3">
          <TypeAnimation
            key={activeLanguage.GAME_PAGE_TITLE}
            sequence={[activeLanguage.GAME_PAGE_TITLE]}
            wrapper="h1"
            className="text-4xl gradient-1 font-bold text-center"
            cursor={false}
          />
          <TypeAnimation
            key={activeLanguage.GAME_PAGE_DESCRIPTION}
            ref={typeRef}
            sequence={[2000, activeLanguage.GAME_PAGE_DESCRIPTION]}
            speed={60}
            cursor={true}
            wrapper="p"
            className="text-2xl gradient-2 font-bold text-center mt-4"
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
                <Button
                  variant="default"
                  className="mt-4 cursor-pointer z-40 hover:scale-110 py-6 px-16 text-white text-xl gradient-3 font-bold text-center"
                >
                  {activeLanguage.GAME_PAGE_PLAY_BUTTON}
                </Button>
              </motion.div>
            ) : null}
          </AnimatePresence>
          {children}
        </div>
      )}
      <CanvasContainer />
    </div>
  );
}
