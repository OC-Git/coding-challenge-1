import { useBox } from "@react-three/cannon";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

export const Cube = (props: any) => {
  const texture = useLoader(THREE.TextureLoader, "/woodBright.jpg");
  const [ref, api]: any = useBox(() => ({
    mass: 1,
    args: props.args,
    position: props.position,
    castShadow: props.castShadow,
    rotation: props.rotation,
  }));

  return (
    <mesh api={api} ref={ref} {...props}>
      <boxBufferGeometry args={props.args} />
      <meshPhysicalMaterial map={texture} color={"white"} roughness={0} clearcoat={1} reflectivity={1} />
    </mesh>
  );
};
