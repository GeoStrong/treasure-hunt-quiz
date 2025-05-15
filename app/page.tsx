'use client';

import Dinosaur from '@/public/Dinosaur';
import Hourglass from '@/public/Hourglass';
import StoneHead from '@/public/StoneHead';
import Sword from '@/public/Sword';
import Iphone from '@/public/Iphone';
import Scroll from '@/public/Scroll';
import Ufo from '@/public/Ufo';
import Robot from '@/public/Robot';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const typeRef = useRef<HTMLParagraphElement>(null);

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
    <div className="mt-10 p-8">
      {loading && <Spinner />}
      {!loading && (
        <div className="flex flex-col items-center justify-center gap-3">
          <TypeAnimation
            sequence={['Welcome, Time Explorers!']}
            wrapper="h1"
            className="text-4xl gradient-1 font-bold text-center"
            cursor={true}
          />
          <TypeAnimation
            ref={typeRef}
            sequence={[
              2000,
              'A mysterious glitch has scrambled history — from dinosaurs to the future! Your mission is to travel through time, solve riddles, and restore the past before it’s too late. Click on play to begin your journey. Good luck… history depends on you! 🚀',
            ]}
            speed={60}
            cursor={false}
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
                  Play
                </Button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      )}
      <div
        id="canvas-container"
        className={`absolute w-screen h-screen inset-0 -z-10 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Canvas onCreated={() => setLoading(false)}>
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
