import * as THREE from "three";
import { usePlane } from "@react-three/cannon";

interface Props {
    receiveShadow?: boolean;
}

export const Floor = (props: Props): JSX.Element => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -1, 0] }));

    return (
        <mesh ref={ref} {...props}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshPhysicalMaterial side={THREE.DoubleSide} />
        </mesh>
    );
};
