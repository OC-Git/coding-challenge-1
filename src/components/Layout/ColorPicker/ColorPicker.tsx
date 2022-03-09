import * as THREE from "three";
import "./ColorPicker.scss";
import { state } from "../../../store";
import { BoxColors } from "../../../interface";
import { COLOR_PALETTE } from "../../../constants";

export const ColorPicker = (): JSX.Element => {
  const onHandleClick = (event: any) => {
    if (!state.activeMesh) return;

    const colorAttribute = event.target.getAttribute("data-color");
    const color = new THREE.Color(colorAttribute);

    //@ts-ignore
    state.activeMesh.material.color = color;
  };

  return (
    <div className={"color-picker"}>
      <div className={"color-picker-flex"}>
        {COLOR_PALETTE.map((color) => {
          return (
            <div
              key={color as BoxColors}
              className={"color-picker__box"}
              data-color={color as BoxColors}
              onClick={onHandleClick}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
