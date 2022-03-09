import { Model } from "./Model";
import { BoundingBox } from "../Base/BoundingBox/BoundingBox";
import { Dragable } from "../Base/Dragable/Dragable";

/* TransformGroup requires one children only */

export const Stand = (): JSX.Element => {
  return (
    <Dragable transformGroup>
      <BoundingBox visible position={[14, 14, 0]} dims={[8, 19.6, 5]} offset={[0, 9.85, 0]}>
        <Model castShadow scale={new Array(3).fill(0.1)} path={"/lamp/scene.gltf"} />
      </BoundingBox>
    </Dragable>
  );
};
