import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

interface Props {
  path: string;
  scale: number[];
  castShadow: boolean;
}

export const Model = (props: Props): JSX.Element => {
  const model = useLoader(GLTFLoader, props.path);

  model.scene.traverse((child) => {
    //@ts-ignore
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      //@ts-ignore
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive object={model.scene} {...props} />;
};
