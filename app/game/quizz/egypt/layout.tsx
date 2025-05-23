'use client';

import React, { useEffect, useState } from 'react';
import ModelsLoading from '@/components/canvas/ModelsLoading';
import AncientEgyptCanvas from '@/components/canvas/AncientEgyptCanvas';
import { useProgress } from '@react-three/drei';
import { AnimatePresence, motion } from 'motion/react';
import { GiEgyptianSphinx } from 'react-icons/gi';
import useLanguage from '@/lib/hooks/useLanguage';
import { useAppSelector } from '@/lib/store/hooks';
import { quizzRedirection } from '@/lib/actions';

const AncientEgyptLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();
  const [isVisible, setIsVisible] = useState(false);
  const activeLanguage = useLanguage();
  const { profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [progress]);

  useEffect(() => {
    if (!profile.prehistoricQuizz.passed) {
      quizzRedirection('/oopsie');
    }
    if (profile.egyptQuizz.passed) {
      quizzRedirection('/new-step');
    }
  }, [profile.egyptQuizz.passed, profile.prehistoricQuizz.passed]);

  return (
    <div className="w-full h-full">
      {loading && <ModelsLoading />}
      {!loading && (
        <>
          <h1 className="text-center text-[#3B2F2F] text-3xl flex items-center justify-center gap-2 text-gradient-2 font-bold">
            {activeLanguage.EGYPT_PAGE_TITLE}
            <GiEgyptianSphinx />
          </h1>
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-yellow-300/10 border-amber-950 border-2 rounded-lg p-5 mt-5">
                  {children}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </>
      )}
      <AncientEgyptCanvas />
    </div>
  );
};
export default AncientEgyptLayout;
