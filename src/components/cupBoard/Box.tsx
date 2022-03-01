import { Triplet, useBox } from "@react-three/cannon";
import { BoxType } from "../../interface";
import { boxHelper } from "../../utility";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";

interface Props extends BoxType {
    isHovered?: boolean;
    isOpen?: boolean;
    handleFrontHover?: () => void;
    handleFrontDoor?: () => void;
}

export const Box = ({ type, isHovered, isOpen, handleFrontHover, handleFrontDoor }: Props) => {
    const colorMap = useLoader(TextureLoader, "Wood066_1K_Color.jpg");
    const { position, measurement } = boxHelper({ type });

    const [ref, api] = useBox(() => ({ mass: 0, position: position as Triplet }));
    const colorHover = isHovered ? "red" : "blue";

    useEffect(() => {
        if (type === "frontDoor" && isHovered) {
            document.body.style.cursor = "pointer";
            return;
        }

        document.body.style.cursor = "initial";
    }, [isHovered, type]);

    useEffect(() => {
        if (isOpen) {
            // api.position.set(0, 0, 10);
            api.rotation.set(0, Math.PI / 2, 0);
            return;
        }

        api.rotation.set(0, 0, 0);
    }, [api, isOpen]);

    return (
        <mesh
            ref={ref}
            position={position}
            onPointerOver={handleFrontHover}
            onPointerOut={handleFrontHover}
            //@ts-ignore
            onClick={handleFrontDoor}
        >
            <boxBufferGeometry attach={"geometry"} args={measurement} />
            <meshStandardMaterial map={colorMap} color={colorHover} />
        </mesh>
    );
};
