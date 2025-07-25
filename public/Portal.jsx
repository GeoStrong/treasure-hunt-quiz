/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 portal.glb 
Author: Kroko.blend (https://sketchfab.com/jaromir.ternavskiy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/portal-door-46983acd0eac4fd4a9bb206b1df029ba
Title: Portal Door
*/

import React from 'react';
import { Center, useGLTF } from '@react-three/drei';

const Portal = (props) => {
  const { nodes, materials } = useGLTF('/portal.glb');
  return (
    <Center position={[0, 1, 0]}>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          position={[3.032, 3.608, -0.231]}
          rotation={[0, 0.071, 0]}
          scale={[3.268, 4.828, 3.521]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Material}
          position={[3.122, 5.669, -0.303]}
          rotation={[0, 0.03, -Math.PI]}
          scale={[1.126, 1.121, 0.99]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials['Material.002']}
          position={[3.144, 3.178, -0.22]}
          rotation={[0, 0.027, 0]}
          scale={[2.373, 2.596, 1.163]}
        />
      </group>
    </Center>
  );
};

useGLTF.preload('/portal.glb');

export default Portal;
