import { Triplet, useBox } from "@react-three/cannon";

interface Props {
  position?: Triplet;
  offset?: Triplet;
  dims?: Triplet;
  visible?: boolean;
}

export const BoundingBox: React.FC<Props> = ({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = false,
  children,
}): JSX.Element => {
  const [ref, api] = useBox(() => ({ mass: 1, args: dims, position: position }));

  return (
    // @ts-ignore
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe color={"red"} />
      </mesh>

      <group position={offset}>{children}</group>
    </group>
  );
};
