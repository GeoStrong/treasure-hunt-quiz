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
          <OrbitControls enableZoom={true} />
          <Sky />
          <Ground scale={0.006} />
          <VictorianEnvironment scale={2} position={[-2, 0.01, 1]} />
          <Train scale={0.2} position={[2, 0.35, -1.5]} />
          <Rails scale={3} position={[0, 0.05, -2.45]} rotation={[0, 1.5, 0]} />
          <Lamp scale={0.2} position={[2, 0, 0]} />
          <Hallway scale={0.3} position={[0, 0.1, -4]} rotation={[0, 4.7, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default VictorianCanvas;
