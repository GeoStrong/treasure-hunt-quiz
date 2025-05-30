'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Miami from '@/public/Miami';
import Pacman from '@/public/Pacman';
import Rubik from '@/public/Rubik';
// import Nuclear from '@/public/Nuclear';
import Ali from '@/public/Ali';
import Tetris from '@/public/Tetris';
import { Environment, OrbitControls, Sky } from '@react-three/drei';

const Era1980Canvas: React.FC = () => {
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
          <Miami scale={0.08} position={[0, -2, 0]} />
          <Pacman scale={0.01} position={[0, 0, -3]} rotation={[0, 0, 0]} />
          <Rubik scale={5} position={[1, 0, 2]} rotation={[1, 1, 2]} />
          <Ali position={[0, 0, 5]} scale={0.001} />
          <Tetris position={[-2, 0, 0]} rotation={[0, 0, 0]} scale={10} />
          {/* <Nuclear scale={0.06} position={[-2, 1, 0]} rotation={[-5, 0, 0]} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Era1980Canvas;
