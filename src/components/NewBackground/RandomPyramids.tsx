import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type PyramidProps = {
  count?: number;
};

type PyramidData = {
  basePosition: THREE.Vector3;
  direction: THREE.Vector3;
  scale: number;
  speed: number;
  rotationSpeed: THREE.Vector3;
  progress: number;
  resetAt: number;
  currentScale: number;
  isGrowing: boolean;
  material: THREE.MeshStandardMaterial;
};

export default function RandomPyramids({ count = 30 }: PyramidProps) {
  const groupRef = useRef<THREE.Group>(null);

  const pyramids = useMemo(() => {
    return Array.from({ length: count }, () => ({
      basePosition: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        3
      ),
      direction: new THREE.Vector3(
        (Math.random() - 0.5),
        (Math.random() - 0.5),
        0
      ).normalize(),
      scale: 1,
      speed: 0.5 + Math.random() * 0.5,
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
      ),
      progress: 0,
      resetAt: 3 + Math.random() * 5,
      currentScale: 1,
      isGrowing: false,
    }));
  }, [count]);



  useFrame((_, delta) => {
    pyramids.forEach((p, i) => {
      const mesh = groupRef.current?.children[i] as THREE.Mesh;
      if (!mesh) return;

      // Progress (like time)
      p.progress += delta;

      // Move pyramid in its direction
      const drift = p.direction.clone().multiplyScalar(p.progress * p.speed);
      const newPos = p.basePosition.clone().add(drift);
      mesh.position.copy(newPos);

      // Rotation
      mesh.rotation.x += p.rotationSpeed.x;
      mesh.rotation.y += p.rotationSpeed.y;
      mesh.rotation.z += p.rotationSpeed.z;

      // Scale: shrink or grow
      if (p.isGrowing) {
        p.currentScale = Math.min(1, p.currentScale + delta * 2);
        if (p.currentScale === 1) p.isGrowing = false;
      } else if (p.progress >= p.resetAt) {
        // Start disappearing
        p.currentScale -= delta * 2;
        if (p.currentScale <= 0) {
          // Reset
          p.basePosition.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            p.basePosition.z
          );
          p.direction.set(
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 1,
            p.direction.z
          ).normalize();
          p.rotationSpeed.set(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02
          );
          p.progress = 0;
          p.resetAt = 3 + Math.random() * 5;
          p.currentScale = 0;
          p.isGrowing = true;

          mesh.position.copy(p.basePosition); // prevent flying in
        }
      }

      mesh.scale.setScalar(p.currentScale);
    });
  });

  return (
    <group ref={groupRef}>
      {pyramids.map((p, i) => (
        <mesh key={i} position={p.basePosition.clone()} scale={[1, 1, 1]}>
          <coneGeometry args={[0.5, 1, 4]} />
          <meshStandardMaterial color="#404040" emissive="#404040" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}
