import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

import RandomPyramids from './RandomPyramids';

function LightStreak({ position, top }: { position: [number, number, number], top: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const speed = 0.2;

  const endPosition = position[1]

  // Offset initial position based on direction
  const [startPosition] = useState<[number, number, number]>(() => {
    const offsetY = top ? 10 : -10;
    return [position[0], position[1] + offsetY, position[2]];
  });

  useFrame(() => {
    if (ref.current) {
      if( top && ref.current.position.y >= endPosition || !top && ref.current.position.y <= endPosition){
        ref.current.position.y += top ? -speed : speed;
      }

      // Optional: loop when out of view
      // if (top && ref.current.position.y < position[1]) {
      //   ref.current.position.y = startPosition[1];
      // } else if (!top && ref.current.position.y > position[1]) {
      //   ref.current.position.y = startPosition[1];
      // }
    }
  });

  return (
    <mesh ref={ref} position={startPosition}>
      <planeGeometry args={[0.05, 2]} />
      <meshStandardMaterial
        color="#404040"
        transparent
        opacity={0.7}
        emissive="#404040"
        toneMapped={false}
      />
    </mesh>
  );
}


// Generate multiple light streaks
function LightStreaks() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const streaks = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 4,
    ] as [number, number, number],
    top: i%2==0,
  }));

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.1;
      groupRef.current.rotation.x = mouse.y * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {streaks.map((s, i) => (
        <LightStreak key={i} position={s.position} top={s.top} />
      ))}
    </group>
  );
}

// Final background
export default function NewBackground() {
  return (
    <div className='z-0 absolute h-fullscreen w-full overflow-hidden pointer-events-auto'>
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 8], fov: 75 }}
      >
        <ambientLight intensity={0.2} />
        <LightStreaks />
        <RandomPyramids count={7} />
      </Canvas>
    </div>

    
  );
}
