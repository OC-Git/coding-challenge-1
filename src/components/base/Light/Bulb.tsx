export const Bulb = (props: any) => {
    return (
        <mesh {...props}>
            <pointLight castShadow />
            <sphereBufferGeometry args={[5, 20, 20]} />
            <meshPhongMaterial emissive={"yellow"} />
        </mesh>
    );
};
