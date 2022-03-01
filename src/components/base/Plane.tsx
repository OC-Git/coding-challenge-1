import { usePlane } from "@react-three/cannon";

export const Plane = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

    return (
        <mesh ref={ref} position={[0, 0, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshStandardMaterial attach={"material"} color={"darkgrey"} />
        </mesh>
    );
};
