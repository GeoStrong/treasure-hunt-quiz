/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 drone.glb 
Author: Willy Decarpentrie (https://sketchfab.com/skudgee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mech-drone-8d06874aac5246c59edb4adbe3606e0e
Title: Mech Drone
*/

import React, { useEffect } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Drone = (props) => {
  const group = React.useRef();
  const { scene, animations } = useGLTF('/drone.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <lOD>
        <group name="Sketchfab_Scene">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="Object_7"
            geometry={nodes.Object_7.geometry}
            material={materials.Robot}
            skeleton={nodes.Object_7.skeleton}
            scale={0.002}
          />
        </group>
      </lOD>
    </group>
  );
};

useGLTF.preload('/drone.glb');

export default Drone;
