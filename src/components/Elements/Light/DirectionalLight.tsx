import { Triplet } from "@react-three/cannon";

interface Props {
  position?: Triplet;
  intensity?: number;
  castShadow?: boolean;
}

export const DirectionalLight = ({ position, intensity, castShadow }: Props) => {
  return (
    <directionalLight
      shadow-mapSize-height={2 ** 10}
      shadow-mapSize-width={2 ** 10}
      shadow-radius={10}
      position={position}
      intensity={intensity}
      castShadow={castShadow}
    />
  );
};
