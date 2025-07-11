/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 hourglass.glb 
Author: • Less • (https://sketchfab.com/lessart)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hourglass-a453e90d47b74260b5e5ccd5a965fe3e
Title: Hourglass
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useFloating from '@/lib/hooks/useFloating';

const Hourglass = (props) => {
  const { nodes, materials } = useGLTF('/hourglass.glb');
  const ref = useRef();

  useFloating(ref);

  return (
    <group ref={ref} {...props} dispose={null}>
      <lOD>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.aiStandardSurface2SG}
          position={[0.003, 25.642, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.274}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.aiStandardSurface1SG}
          position={[0.003, 25.668, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={19.435}
        />
      </lOD>
    </group>
  );
};

useGLTF.preload('/hourglass.glb');

export default Hourglass;
