/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 sand.glb 
Author: noortjeschuur (https://sketchfab.com/noortjeschuur)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sand-d491e5f026234eaea7b3a36fd48da21b
Title: Sand
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

const Sand = (props) => {
  const { nodes, materials } = useGLTF('/sand.glb');
  return (
    <group {...props} dispose={null}>
      <lOD>
        <mesh
          geometry={nodes.pPlane1_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, 0.35, 0]}
          scale={1.952}
        />
      </lOD>
    </group>
  );
};

useGLTF.preload('/sand.glb');

export default Sand;
