import * as THREE from "three";
import { usePlane } from "@react-three/cannon";
import { PlaneBufferGeometryProps } from "react-three-fiber";

interface Props extends PlaneBufferGeometryProps {
    receiveShadow?: boolean;
}

export const Floor = ({ receiveShadow, args }: Props): JSX.Element => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -1, 0], args }));

    return (
        <mesh ref={ref} receiveShadow={receiveShadow}>
            <planeBufferGeometry attach={"geometry"} args={args} />
            <meshPhysicalMaterial side={THREE.DoubleSide} />
        </mesh>
    );
};
