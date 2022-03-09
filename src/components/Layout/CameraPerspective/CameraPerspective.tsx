import "./CameraPerspective.scss";
import { Triplet } from "@react-three/cannon";
import { state } from "../../../store";
import { CAMERA_SETS } from "../../../constants";

export const CameraPerspective = () => {
  const handleClick = (num: number) => {
    const loadedSet = CAMERA_SETS[num as keyof typeof CAMERA_SETS].cameraPos as Triplet;
    const loadedTarget = CAMERA_SETS[num as keyof typeof CAMERA_SETS].target as Triplet;

    state.cameraPos.set(...loadedSet);
    state.target.set(...loadedTarget);
    state.shouldUpdate = true;
  };

  return (
    <div className={"button-container"}>
      <button onClick={() => handleClick(1)} className={"button button--primary"}>
        {"Front"}
      </button>
      <button onClick={() => handleClick(2)} className={"button button--secondary"}>
        {"Back"}
      </button>
    </div>
  );
};
