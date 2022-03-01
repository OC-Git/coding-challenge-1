import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Box } from "../cupBoard";
import { Plane } from "../base";

export const Scene = () => {
    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.9} />
            <Physics>
                <Box type={"top"} />
                <Box type={"sidewallLeft"} />
                <Box type={"sidewallRight"} />
                <Box type={"bottom"} />
                <Box type={"front"} />
                <Box type={"shelf"} />
                <Plane />
            </Physics>
        </>
    );
};
