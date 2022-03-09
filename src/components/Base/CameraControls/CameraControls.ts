import { useFrame } from "react-three-fiber";
import { state } from "../../../store";

export const CameraControls = () => {
  useFrame(({ camera, scene }: any) => {
    const cube1 = scene.getObjectByName("cube1") || null;
    const cube2 = scene.getObjectByName("cube2") || null;

    if (cube1 !== null) {
      cube1.material.color = state.activeColor;
    }

    if (cube2 !== null) {
      cube2.material.color = state.activeColor;
    }

    //@ts-ignore (if several models are used)
    if (state.activeMesh.name !== state.activeMeshName) {
      state.activeMesh = scene.getObjectByName(state.activeMeshName) || {};
    }

    if (state.shouldUpdate) {
      camera.position.lerp(state.cameraPos, 0.1);
      scene.orbitControls.target.lerp(state.target, 0.1);
      scene.orbitControls.update();
      const diff = camera.position.clone().sub(state.cameraPos).length();

      if (diff < 0.1) {
        state.shouldUpdate = false;
      }
    }
  });

  return null;
};
