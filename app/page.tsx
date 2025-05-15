'use client';

import Dinosaur from '@/public/Dinosaur';
import Hourglass from '@/public/Hourglass';
import StoneHead from '@/public/StoneHead';
import Sword from '@/public/Sword';
import Iphone from '@/public/Iphone';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="mt-10 p-8">
      <div className="">
        <TypeAnimation
          sequence={['Welcome, Time Explorers!']}
          wrapper="h1"
          cursor={true}
          className="text-4xl gradient-1 font-bold text-center"
        />
        <TypeAnimation
          sequence={[
            2000,
            'A mysterious glitch has scrambled history — from dinosaurs to the future! Your mission is to travel through time, solve riddles, and restore the past before it’s too late. Click on play to begin your journey. Good luck… history depends on you!',
          ]}
          speed={60}
          wrapper="p"
          cursor={false}
          className="text-2xl gradient-2 font-bold text-center mt-4"
          style={{ display: 'block' }}
        />
      </div>
      <div
        id="canvas-container"
        className="absolute w-screen h-screen inset-0 -z-10"
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={5} />
            <OrbitControls />
            <Dinosaur scale={0.015} />
            <Dinosaur scale={0.015} />
            <Hourglass scale={0.02} />
            <Hourglass scale={0.02} />
            <StoneHead scale={0.005} />
            <Sword scale={1} />
            {/* <Iphone scale={1} /> */}
            <Environment preset="lobby" />
            <Stars />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
