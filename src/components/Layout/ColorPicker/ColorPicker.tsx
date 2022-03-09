import * as THREE from "three";
import { BoxColors } from "../../../interface";
import "./ColorPicker.scss";
import { colorPalette } from "../../../constants";

export const ColorPicker = () => {
  const onHandleClick = (event: any) => {
    const colorAttribute = event.target.getAttribute("data-color");

    const color = new THREE.Color(colorAttribute);
    console.log(color);
  };

  return (
    <div className={"color-picker"}>
      <div className={"color-picker-flex"}>
        {colorPalette.map((color) => {
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
