import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Box } from "../cupBoard";
import { Plane } from "../base";
import { useState } from "react";

export const Scene = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onHandleFrontHover = () => {
        console.log("now");
        setIsHovered((prev) => !prev);
    };

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.9} />
            <Physics>
                <Box type={"bottom"} />
                <Box type={"back"} />
                <Box type={"top"} />
                <Box type={"sidewallLeft"} />
                <Box type={"sidewallRight"} />
                <Box type={"shelf"} />
                <Box type={"frontDoor"} isHovered={isHovered} handleFrontHover={onHandleFrontHover} />
                <Plane />
            </Physics>
        </>
    );
};
