import * as THREE from "three";
import { Triplet, useBox } from "@react-three/cannon";
import { BoxColors, BoxType } from "../../interface";
import { boxHelper } from "../../utility";
import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";

interface Props extends BoxType {
    isHovered?: boolean;
    isOpen?: boolean;
    isShown?: boolean;
    handleFrontHover?: () => void;
    handleFrontDoor?: () => void;
}

export const Box = ({ type, isHovered, isOpen, isShown, handleFrontHover, handleFrontDoor }: Props) => {
    const texture = useLoader(THREE.TextureLoader, "/wood.jpg");
    const { position, measurement } = boxHelper({ type });
    const [color] = useState<BoxColors>("white");

    const [ref, api] = useBox(() => ({ mass: 0, position: position as Triplet }));

    useEffect(() => {
        if (type === "frontDoor" && isHovered) {
            document.body.style.cursor = "pointer";
            return;
        }

        document.body.style.cursor = "initial";
    }, [isHovered, type]);

    useEffect(() => {
        if (isOpen) {
            api.rotation.set(0, Math.PI / 2, 0);
            return;
        }

        api.rotation.set(0, 0, 0);
    }, [api, isOpen]);

    return (
        <mesh
            castShadow
            ref={ref}
            position={position}
            visible={isShown}
            onPointerOver={handleFrontHover}
            onPointerOut={handleFrontHover}
            //@ts-ignore
            onClick={handleFrontDoor}
        >
            <boxBufferGeometry attach={"geometry"} args={measurement} />
            <meshPhysicalMaterial map={texture} color={color} roughness={0.5} clearcoat={1} reflectivity={1} />
        </mesh>
    );
};
