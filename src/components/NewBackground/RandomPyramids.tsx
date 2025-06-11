import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type PyramidProps = {
  count?: number;
};

export default function RandomPyramids({ count = 30 }: PyramidProps) {
  const groupRef = useRef<THREE.Group>(null);

  const pyramids = Array.from({ length: count }, () => ({
    basePosition: new THREE.Vector3(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ),
    scale: 0.3 + Math.random() * 1,
    speed: 0.5 + Math.random() * 1,
    floatRange: 0.5 + Math.random() * 0.5,
    rotationSpeed: (Math.random() - 0.5) * 0.01,
  }));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const pyramid = pyramids[i];
        child.position.y = pyramid.basePosition.y + Math.sin(t * pyramid.speed) * pyramid.floatRange;
        child.rotation.y += pyramid.rotationSpeed;
        child.rotation.x += pyramid.rotationSpeed;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {pyramids.map((p, i) => (
        <mesh
          key={i}
          position={p.basePosition.clone()}
          scale={p.scale}
        >
          <coneGeometry args={[0.5, 1, 4]} />
          <meshStandardMaterial
            color="#404040"
            emissive="#404040"
            emissiveIntensity={0.5}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
