import { Dragable } from "../../Base";
import { Cube } from "../../Elements";

export const Cubes = (): JSX.Element => {
  return (
    <Dragable>
      <Cube castShadow position={[-15, 20, 0]} args={[10, 10, 10]} rotation={[1, 1, 0]} name={"cube1"} />
      <Cube castShadow position={[-15, 5, 0]} args={[10, 10, 10]} name={"cube2"} />
    </Dragable>
  );
};
