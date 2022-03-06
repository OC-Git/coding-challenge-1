import * as THREE from "three";
import "@react-three/fiber";
import { useLoader } from "react-three-fiber";

export const Background = () => {
    const texture = useLoader(THREE.TextureLoader, "/sky.jpg");
    return <primitive attach={"background"} object={texture} />;
};
