'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import City from '@/public/City';
import Drone from '@/public/Drone';
import Hologram from '@/public/Hologram';
import Car from '@/public/Car';
import { Environment, OrbitControls } from '@react-three/drei';

const FutureCanvas: React.FC = () => {
  return (
    <div
      id="canvas-container"
      className={`absolute w-screen h-screen -z-10 inset-0 `}
    >
      <Canvas dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
          <City scale={1.5} position={[1, -2, 0]} />
          <Drone scale={2} position={[-2, 0, 0]} />
          <Hologram scale={1} position={[1, -2, -3]} />
          <Car scale={0.2} position={[3, 0.5, 3]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default FutureCanvas;
