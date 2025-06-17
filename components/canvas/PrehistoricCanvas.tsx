'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Dinosaur from '@/public/Dinosaur';
import Poly from '@/public/Poly';
import Pteranodon from '@/public/Pteranodon';
import Asteroid from '@/public/Asteroid';
import Fire from '@/public/Fire';
import { Environment, OrbitControls, Sky } from '@react-three/drei';

const PrehistoricCanvas: React.FC = () => {
  return (
    <div
      id="canvas-container"
      className={`absolute w-screen h-[120vh] -z-10 inset-0 `}
    >
      <Canvas dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Dinosaur
            floating={false}
            rotation={[0, 8, 0]}
            position={[1, -2.1, 1]}
            scale={0.01}
          />
          <Pteranodon scale={0.5} position={[0, -3, 0]} rotation={[6, 1, 0]} />
          <Poly scale={0.1} position={[0, -2.5, -1]} />
          <Asteroid scale={0.5} position={[2, 0, -1]} />
          <Fire scale={0.5} position={[0, -2.2, 0.4]} />
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <OrbitControls />
          <Sky />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default PrehistoricCanvas;
