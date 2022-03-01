import { Triplet, useBox } from "@react-three/cannon";
import { BoxType } from "../../interface";
import { boxHelper } from "../../utility";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

interface Props extends BoxType {
    isHovered?: boolean;
    handleFrontHover?: () => void;
}

export const Box = ({ type, isHovered, handleFrontHover }: Props) => {
    const colorMap = useLoader(TextureLoader, "Wood066_1K_Color.jpg");
    const { position, measurement } = boxHelper({ type });

    const [ref, api] = useBox(() => ({ mass: 0, position: position as Triplet }));
    // const colorHover = isHovered ? "red" : "transparent";

    return (
        <mesh
            ref={ref}
            position={position}
            onPointerOver={handleFrontHover}
            onPointerOut={handleFrontHover}
            onClick={() => {
                api.velocity.set(0, 2, 0);
            }}
        >
            <boxBufferGeometry attach={"geometry"} args={measurement} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
};
