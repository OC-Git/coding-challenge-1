import "./CameraPerspective.scss";
import { Triplet } from "@react-three/cannon";
import { state } from "../../../store";
import { CAMERA_SETS } from "../../../constants";

export const CameraPerspective = () => {
  const onHandleClick = (num: number) => {
    const loadedSet = CAMERA_SETS[num as keyof typeof CAMERA_SETS].cameraPos as Triplet;
    const loadedTarget = CAMERA_SETS[num as keyof typeof CAMERA_SETS].target as Triplet;

    state.cameraPos.set(...loadedSet);
    state.target.set(...loadedTarget);
    state.activeMeshName = CAMERA_SETS[num as keyof typeof CAMERA_SETS].name;
    state.shouldUpdate = true;
  };

  return (
    <div className={"button-container"}>
      <button onClick={() => onHandleClick(1)} className={"button button--primary"}>
        {"Front"}
      </button>
      <button onClick={() => onHandleClick(2)} className={"button button--secondary"}>
        {"Back"}
      </button>
    </div>
  );
};
