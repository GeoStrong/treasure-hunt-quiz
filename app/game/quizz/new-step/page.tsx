'use client';

import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import useLanguage from '@/lib/hooks/useLanguage';
import TreasureMap from '@/components/TreasureMap';
import QRScanner from '@/components/QRScanner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NewStep: React.FC = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [qrScannerIsActive, setQrScannerIsActive] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);
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

  return (
    <div className="w-full h-full mb-10 flex flex-col items-center justify-center">
      {qrScannerIsActive ? (
        <QRScanner setQRScannerVisibility={setQrScannerIsActive} />
      ) : (
        <>
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
                className="mt-5"
              >
                <TreasureMap />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="flex flex-col gap-4">
            <p className="text-center text-xl text-bold text-white mt-5">
              Since the game is finished, you can proceed playing the game
              without scanning the QR code.
            </p>
            <Link
              href="/game/quizz/egypt"
              className="gradient-3 text-center p-2 rounded-2xl"
            >
              Go to the Ancient Egypt Era
            </Link>
            <Link
              href="/game/quizz/medieval"
              className="gradient-3 text-center p-2 rounded-2xl"
            >
              Go to the Medieval Era
            </Link>
            <Link
              href="/game/quizz/victorian"
              className="gradient-3 text-center p-2 rounded-2xl"
            >
              Go to the Victorian Era
            </Link>
            <Link
              href="/game/quizz/1980"
              className="gradient-3 text-center p-2 rounded-2xl"
            >
              Go to the 1980 Era
            </Link>
            <Link
              href="/game/quizz/future"
              className="gradient-3 text-center p-2 rounded-2xl"
            >
              Go to the Futuristic Era
            </Link>
          </div>

          <Button
            onClick={() => {
              setQrScannerIsActive(true);
            }}
            className="bg-purple-800 p-6 hover:bg-purple-700 text-white text-xl font-bold mt-10"
          >
            {activeLanguage.NEW_STEP_SCAN_BUTTON}
          </Button>
        </>
      )}
    </div>
  );
};
export default NewStep;
