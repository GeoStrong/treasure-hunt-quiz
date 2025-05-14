import { useFrame, useThree } from '@react-three/fiber';
import React, { useState } from 'react';
import { Group, Object3DEventMap, Vector3 } from 'three';

const useFloating = (ref: React.RefObject<Group<Object3DEventMap>>) => {
  const { viewport } = useThree();
  const screenWidth = viewport.width;
  const screenHeight = viewport.height;

  // Position and velocity state
  const [velocity] = useState(
    () =>
      new Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        0 // 2D plane movement
      )
  );

  useFrame(() => {
    if (ref.current) {
      const pos = ref.current.position;

      // Update position
      pos.add(velocity);

      // Bounce on horizontal bounds
      if (pos.x > screenWidth / 2 || pos.x < -screenWidth / 2) {
        velocity.x *= -1;
      }

      // Bounce on vertical bounds
      if (pos.y > screenHeight / 2 || pos.y < -screenHeight / 2) {
        velocity.y *= -1;
      }

      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.008;
      // ref.current.rotation.z += 0.01; // spins like a flip
    }
  });

  return null;
};
export default useFloating;
