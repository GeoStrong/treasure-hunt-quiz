'use client';

import Dinosaur from '@/public/Dinosaur';
import Hourglass from '@/public/Hourglass';
import StoneHead from '@/public/StoneHead';
import Sword from '@/public/Sword';
import Iphone from '@/public/Iphone';
import Scroll from '@/public/Scroll';
import Ufo from '@/public/Ufo';
import Robot from '@/public/Robot';
import Portal from '@/public/Portal';
import Compass from '@/public/Compass';
import { OrbitControls, Stars, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ModelsLoading from '@/components/ModelsLoading';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import { useAppDispatch } from '@/lib/store/hooks';
import { languageSlice } from '@/lib/store/languageSlice';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import useLanguage from '@/lib/hooks/useLanguage';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);
  const { progress } = useProgress();
  const dispatch = useAppDispatch();
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
    <div className="mt-10 p-8">
      <div className="flex relative mb-10 z-10 w-full justify-center">
        <Select defaultValue="en">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="en"
              onClick={() => {
                dispatch(languageSlice.actions.setLanguage('en'));
              }}
              className="flex justify-center gap-1"
            >
              EN{' '}
              <Image
                src="/images/english.svg"
                alt="English"
                width={20}
                height={20}
              />
            </SelectItem>
            <SelectItem
              value="es"
              onClick={() => {
                dispatch(languageSlice.actions.setLanguage('et'));
              }}
              className="flex justify-center gap-1"
            >
              ES
              <Image
                src="/images/estonian.svg"
                alt="English"
                width={20}
                height={20}
              />
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      {loading && <ModelsLoading />}
      {!loading && (
        <div className="flex flex-col relative z-10 items-center justify-center gap-3">
          <TypeAnimation
            key={activeLanguage.WELCOME_PAGE_TITLE}
            sequence={[activeLanguage.WELCOME_PAGE_TITLE]}
            wrapper="h1"
            className="text-4xl gradient-1 font-bold text-center"
            cursor={false}
          />
          <TypeAnimation
            key={activeLanguage.WELCOME_PAGE_DESCRIPTION}
            ref={typeRef}
            sequence={[2000, activeLanguage.WELCOME_PAGE_DESCRIPTION]}
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
                  {activeLanguage.WELCOME_PAGE_PLAY_BUTTON}
                </Button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      )}
      <div
        id="canvas-container"
        className={`absolute w-screen h-screen inset-0 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={5} />
            <OrbitControls />
            <Dinosaur scale={0.015} />
            <Hourglass scale={0.02} />
            <StoneHead scale={0.005} />
            <Sword scale={1} />
            <Iphone scale={0.5} />
            <Scroll scale={0.03} />
            <Ufo scale={0.5} />
            <Robot scale={0.1} />
            <Portal scale={0.5} />
            <Compass scale={5} />

            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={7}
              saturation={0}
              fade
              speed={1}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
