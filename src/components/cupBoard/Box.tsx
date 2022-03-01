import { Triplet, useBox } from '@react-three/cannon';
import { BoxType } from '../../interface';
import { boxHelper } from '../../utility';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

export const Box = ({ type }: BoxType) => {
  const colorMap = useLoader(TextureLoader, 'PavingStones092_1K_Color.jpg');
  const { position, measurement } = boxHelper({ type });

  console.log('now');

  const [ref, api] = useBox(() => ({ mass: 0, position: position as Triplet }));
  return (
    <mesh
      ref={ref}
      position={position}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
    >
      <boxBufferGeometry attach={'geometry'} args={measurement} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
