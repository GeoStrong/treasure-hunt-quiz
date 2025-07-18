/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 camel.glb 
Author: omarme37 (https://sketchfab.com/omarme37)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/camel-44ef2ea4b50a49e395e5e3ebbdc99f98
Title: camel
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

const Camel = (props) => {
  const { nodes, materials } = useGLTF('/camel.glb');
  return (
    <group {...props} dispose={null}>
      <lOD>
        <mesh
          geometry={nodes.c_0.geometry}
          material={materials['Material.004']}
          position={[0.428, 1.137, -0.018]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.428}
        />
      </lOD>
    </group>
  );
};

useGLTF.preload('/camel.glb');

export default Camel;
