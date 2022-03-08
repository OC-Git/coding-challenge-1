import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface Props {
    path: string;
    scale: number[];
    position: Array<number>;
    castShadow: boolean;
}

export const Model = (props: Props) => {
    const model = useLoader(GLTFLoader, props.path);

    return <primitive object={model.scene} {...props} />;
};
