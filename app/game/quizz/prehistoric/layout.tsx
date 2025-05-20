'use client';

import React, { useEffect, useState } from 'react';
import ModelsLoading from '@/components/canvas/ModelsLoading';
import PrehistoricCanvas from '@/components/canvas/PrehistoricCanvas';
import { useProgress } from '@react-three/drei';
import { GiDinosaurRex } from 'react-icons/gi';
import { AnimatePresence, motion } from 'motion/react';

const PrehistoricLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="w-full h-full">
      {loading && <ModelsLoading />}
      {!loading && (
        <>
          <h1 className="text-center text-[#3B2F2F] text-3xl flex items-center justify-center gap-2 text-gradient-2 font-bold">
            Prehistoric Era
            <GiDinosaurRex className="text-[#3B2F2F]" />
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
      <PrehistoricCanvas />
    </div>
  );
};
export default PrehistoricLayout;
