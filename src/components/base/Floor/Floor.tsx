import * as THREE from "three";
import { usePlane } from "@react-three/cannon";

export const Floor = (props: any) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

    return (
        <mesh ref={ref} {...props}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshPhysicalMaterial side={THREE.DoubleSide} />
        </mesh>
    );
};
