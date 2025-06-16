import { Canvas} from '@react-three/fiber';

import RandomPyramids from './RandomPyramids';
import MouseLight from './MouseLight';

export default function NewBackground() {
  return (
    <div className='z-0 absolute h-fullscreen w-full overflow-hidden pointer-events-auto'>
      <Canvas
        shadows
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 8], fov: 75 }}
      >
        <ambientLight intensity={0.2} />
        <MouseLight />
        <RandomPyramids count={7} />
      </Canvas>
    </div>

    
  );
}
