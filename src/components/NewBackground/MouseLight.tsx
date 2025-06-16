import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { camera, size } = useThree();

  const mouse = useRef(new THREE.Vector2(0, 0));
  const raycaster = useRef(new THREE.Raycaster());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / size.width) * 2 - 1;
      mouse.current.y = -(event.clientY / size.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);

  useFrame(() => {
    raycaster.current.setFromCamera(mouse.current, camera);
    const distance = 5;
    const dir = raycaster.current.ray.direction.clone().normalize();
    const newPos = camera.position.clone().add(dir.multiplyScalar(distance));

    if (lightRef.current) lightRef.current.position.copy(newPos);
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={3}
      distance={50}
      decay={1.5}
      color="white"
      castShadow
    />
  );
}
