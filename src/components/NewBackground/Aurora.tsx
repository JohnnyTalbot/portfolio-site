'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

export default function AuroraPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, camera } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  const distance = camera.position.z + 5;
  let width = 1, height = 1;
  if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    const fov = (perspectiveCamera.fov * Math.PI) / 180;
    height = 2 * Math.tan(fov / 2) * distance;
    width = height * (size.width / size.height);
  } else {
    const ortho = camera as THREE.OrthographicCamera;
    width = Math.abs(ortho.right - ortho.left);
    height = Math.abs(ortho.top - ortho.bottom);
  }

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[width, height, 1, 1]} />
      <shaderMaterial
        key={THREE.MathUtils.generateUUID()}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv * 3.0;
    float n = noise(uv + vec2(uTime * 0.05, uTime * 0.03));
    float alpha = smoothstep(0.2, 0.7, n);

    vec3 color = mix(vec3(0.0, 0.1, 0.2), vec3(0.4, 0.7, 0.9), n);
    gl_FragColor = vec4(color, alpha * 0.4);
  }
`;
