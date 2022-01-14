import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import "./styles.scss";
import vertex from './glsl/shader.vert';
import fragment from './glsl/shader.frag';

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
  },
  vertex,
  fragment

);

extend({ WaveShaderMaterial });



const Scene = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
      </Suspense>
    </Canvas>
  );
};

const Globe = () => {
  return (
    <>
      <h1>POMADA MODELADORA</h1>
      <Scene />
    </>
  );
};

export default Globe;
