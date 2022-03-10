import { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";

export const Bulb = ({ position, castShadow, args }: any): JSX.Element => {
  const ref: any = useRef();
  const { scene }: any = useThree();

  scene.lights = [];

  useEffect(() => {
    if (ref.current.hasOwnProperty("uuid")) {
      scene.lights.push(ref);
    }
  }, [scene, ref]);

  return (
    <mesh position={position} ref={ref}>
      <pointLight
        castShadow={castShadow}
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={9}
      />
      <sphereBufferGeometry args={args} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
};
