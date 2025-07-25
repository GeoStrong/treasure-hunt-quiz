/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 mummy.glb 
Author: jankhooo (https://sketchfab.com/jankhooo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mummy-d54cb95e0be1487b85bbc8f1a37b2d6b
Title: Mummy
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

const Mummy = (props) => {
  const { nodes, materials } = useGLTF('/mummy.glb');
  return (
    <group {...props} dispose={null}>
      <lOD>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Mummy}
          position={[-0.046, 1.581, 0.552]}
          rotation={[-Math.PI / 2, 0, -0.001]}
          scale={1.626}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['default']}
          position={[0, 0.049, 0]}
          rotation={[-Math.PI / 2, 0, -0.001]}
          scale={0.753}
        />
      </lOD>
    </group>
  );
};

useGLTF.preload('/mummy.glb');

export default Mummy;
