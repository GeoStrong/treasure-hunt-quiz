import Compass from '@/public/Compass';
import Dinosaur from '@/public/Dinosaur';
import Hourglass from '@/public/Hourglass';
import Iphone from '@/public/Iphone';
import Portal from '@/public/Portal';
import Robot from '@/public/Robot';
import Scroll from '@/public/Scroll';
import StoneHead from '@/public/StoneHead';
import Sword from '@/public/Sword';
import Ufo from '@/public/Ufo';
import { Center, OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

const IntroductionCanvas: React.FC = () => {
  return (
    <div
      id="canvas-container"
      className={`absolute w-screen h-screen inset-0 `}
    >
      <Canvas dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Center>
            <ambientLight intensity={5} />
            <OrbitControls />
            <Dinosaur floating={true} scale={0.015} />
            <Hourglass scale={0.02} />
            <StoneHead scale={0.005} />
            <Sword scale={1} />
            <Iphone scale={0.5} />
            <Scroll scale={0.03} />
            <Ufo scale={0.5} />
            <Robot scale={0.1} />
            <Compass scale={5} />
          </Center>
          <Portal scale={0.5} />

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
  );
};
export default IntroductionCanvas;
