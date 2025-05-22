'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useAppSelector } from '@/lib/store/hooks';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { BiQr } from 'react-icons/bi';
import useLanguage from '@/lib/hooks/useLanguage';

const NewStep: React.FC = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isStepVisible, setIsStepVisible] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);
  const { profile } = useAppSelector((state) => state.profile);
  const activeLanguage = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeRef.current?.innerText?.includes('👣')) {
        clearInterval(interval);
        setIsMapVisible(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMapVisible) {
      const timer = setTimeout(() => {
        setIsStepVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isMapVisible]);

  return (
    <div>
      <TypeAnimation
        ref={typeRef}
        key={activeLanguage.NEW_STEP_TITLE_1}
        sequence={[
          activeLanguage.NEW_STEP_TITLE_1,
          1000,
          activeLanguage.NEW_STEP_TITLE_2,
          1000,
          activeLanguage.NEW_STEP_TITLE_3,
        ]}
        wrapper="h1"
        className="text-3xl text-gradient-2 font-bold text-center"
        cursor={false}
        speed={70}
      />
      <AnimatePresence initial={false}>
        {isMapVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 relative flex justify-center"
          >
            <Image
              src="/images/park-map.png"
              width={200}
              height={200}
              alt="map"
              className="w-full h-full rounded-xl"
            />
            {profile.prehistoricQuizz.passed && (
              <div className="absolute top-20 left-5">
                <IoIosCheckmarkCircle className="text-green-600 text-4xl" />
              </div>
            )}
            {isStepVisible && (
              <motion.div className="absolute top-5 right-5">
                <BiQr className="text-3xl text-black" />
              </motion.div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default NewStep;
