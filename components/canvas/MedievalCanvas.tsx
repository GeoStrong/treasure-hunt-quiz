'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Castle from '@/public/Castle';
import Knight from '@/public/Knight';
import Dragon from '@/public/Dragon';
import Archer from '@/public/Archer';
import { Environment, OrbitControls, Sky } from '@react-three/drei';

const MedievalCanvas: React.FC = () => {
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
          <Castle scale={0.15} position={[0.5, -2, 0]} />
          {/* <Knight scale={0.004} position={[-1.4, -0.45, 2]} /> */}
          <Dragon position={[1, 1, -2]} rotation={[0, 6, 0]} />
          <Archer scale={0.5} position={[-2, -0.4, -1]} rotation={[0, 2, 0]} />
          <Sky />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default MedievalCanvas;
