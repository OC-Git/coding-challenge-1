export const Bulb = ({ position, castShadow, args }: any): JSX.Element => {
  return (
    <mesh position={position}>
      <pointLight
        castShadow={castShadow}
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={9}
      />
      <sphereBufferGeometry args={args} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
};
