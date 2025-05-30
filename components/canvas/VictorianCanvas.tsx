'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Ground from '@/public/Ground';
import VictorianEnvironment from '@/public/Environment';
import Train from '@/public/Train';
import Rails from '@/public/Rails';
import Lamp from '@/public/Lamp';
import Hallway from '@/public/Hallway';
import { Environment, OrbitControls, Sky } from '@react-three/drei';

const VictorianCanvas: React.FC = () => {
  return (
    <div
      id="canvas-container"
      className={`absolute w-screen h-screen -z-10 inset-0 `}
    >
      <Canvas dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <OrbitControls />
          <Sky />
          <Ground scale={0.006} position={[0, -2, 0]} />
          <VictorianEnvironment scale={1.8} position={[-2, -1.99, 1]} />
          <Train scale={0.2} position={[2, -1.65, -1.7]} />
          <Rails
            scale={3.5}
            position={[0, -1.95, -2.7]}
            rotation={[0, 1.5, 0]}
          />
          <Lamp scale={0.2} position={[2, -2, 0]} />
          <Hallway
            scale={0.3}
            position={[0, -1.9, -4]}
            rotation={[0, 4.7, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default VictorianCanvas;
