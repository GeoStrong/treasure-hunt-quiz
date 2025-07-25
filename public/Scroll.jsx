/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scroll.glb 
Author: FlukierJupiter (https://sketchfab.com/FlukierJupiter)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/scroll-7450e494eb654e9b937bb52724220e77
Title: Scroll
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useFloating from '@/lib/hooks/useFloating';

const Scroll = (props) => {
  const { nodes, materials } = useGLTF('/scroll.glb');
  const ref = useRef();

  useFloating(ref);

  return (
    <group ref={ref} {...props} dispose={null}>
      <lOD>
        <mesh
          geometry={nodes['Scroll_LP_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[0, 2.91, -0.071]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[18.378, 18.378, 25.6]}
        />
      </lOD>
    </group>
  );
};

useGLTF.preload('/scroll.glb');

export default Scroll;
