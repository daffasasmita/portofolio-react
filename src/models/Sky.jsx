import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import SkyScene from '../assets/3d/sky.glb'

const sky = ({ isRotating }) => {
    const sky = useGLTF(SkyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if (isRotating) {
        skyRef.current.rotation.y += 0.15 * delta;
      }
    })

  return (
<mesh ref={skyRef}>
    <primitive object={sky.scene} />
</mesh>
  )
}

export default sky