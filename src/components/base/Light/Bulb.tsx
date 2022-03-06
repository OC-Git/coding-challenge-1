import { MeshProps } from "@react-three/fiber";

export const Bulb = (props: MeshProps): JSX.Element => {
    return (
        <mesh {...props}>
            <pointLight castShadow />
            <sphereBufferGeometry args={[5, 20, 20]} />
            <meshPhongMaterial emissive={"yellow"} />
        </mesh>
    );
};
