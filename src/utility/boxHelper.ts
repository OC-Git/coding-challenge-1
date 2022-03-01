import { Triplet } from "@react-three/cannon";
import { BoxType } from "../interface";

export const boxHelper = ({ type }: BoxType) => {
    let measurement: Triplet = [0, 0, 0];
    let position: Triplet = [0, 0, 0];

    if (type === "top") {
        measurement = [12, 0.2, 6];
        position = [0, 23.8, -0.1];
    }

    if (type === "sidewallLeft") {
        measurement = [0.2, 23.6, 5.8];
        position = [-5.9, 11.9, 0];
    }

    if (type === "bottom") {
        measurement = [12, 0.2, 5.8];
        position = [0, 0, 0];
    }

    if (type === "sidewallRight") {
        measurement = [0.2, 23.6, 5.8];
        position = [5.9, 11.9, 0];
    }

    if (type === "back") {
        measurement = [12, 23.8, 0.2];
        position = [0, 11.8, -3];
    }

    if (type === "shelf") {
        measurement = [11.6, 0.4, 5.6];
        position = [0, 11.9, 0];
    }

    if (type === "frontDoor") {
        measurement = [11.6, 23.6, 0.2];
        position = [0, 11.9, 2.8];
    }

    return { measurement, position };
};
