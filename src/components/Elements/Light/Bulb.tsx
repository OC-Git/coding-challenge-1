export const Bulb = ({ position, castShadow, args }: any): JSX.Element => {
  return (
    <mesh position={position}>
      <pointLight castShadow={castShadow} />
      <sphereBufferGeometry args={args} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
};
