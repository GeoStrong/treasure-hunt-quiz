'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Sand from '@/public/Sand';
import Pyramid from '@/public/Pyramid';
import Temple from '@/public/Temple';
import Camel from '@/public/Camel';
import Pharaon from '@/public/Pharaon';
import Sphinx from '@/public/Sphinx';
import Mummy from '@/public/Mummy';
import Horus from '@/public/Horus';
import { Environment, OrbitControls, Sky } from '@react-three/drei';

const AncientEgyptCanvas: React.FC = () => {
  return (
    <div
      id="canvas-container"
      className={`absolute w-screen h-screen -z-10 inset-0 `}
    >
      <Canvas dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <Sand scale={5} position={[0, -3, 0]} />
          <Pyramid scale={0.5} position={[0, -1.5, -7]} />
          <Temple scale={0.01} position={[-6, -1.5, -2]} />
          <Camel scale={0.3} position={[-1, -1.5, -2]} />
          <Pharaon scale={0.5} position={[0, -1.7, 5]} rotation={[0, 3, 0]} />
          <Pharaon scale={0.5} position={[-1, -1.7, 5]} rotation={[0, 3, 0]} />
          <Sphinx scale={0.1} position={[2, 0, 1]} rotation={[0, 2, 0]} />
          <Mummy scale={0.35} position={[2, -1.55, -2]} rotation={[0, 4, 0]} />
          <Horus scale={0.5} position={[0, -1.5, 0]} />
          <OrbitControls enableZoom={false} />
          <Sky />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default AncientEgyptCanvas;
