import { Physics } from "@react-three/cannon";
import { Floor, Bulb, AmbientLight, Background } from "../base";
import { Suspense } from "react";
import { Cupboard } from "../cupBoard";
import { Utility } from "../utility/Utility";

const cupboard = {
    bottom: true,
    back: true,
    sidewallLeft: true,
    sidewallRight: true,
    top: true,
    frontDoor: false,
    shelf: true,
};

export const Scene = (): JSX.Element => {
    return (
        <>
            <Utility orbitControls axesHelper />
            <AmbientLight intensity={0.7} />
            <Bulb position={[-15, 30, 2]} />
            <Physics>
                <Cupboard {...cupboard} />
                <Floor receiveShadow />
                <Suspense fallback={null}>
                    <Background />
                </Suspense>
            </Physics>
        </>
    );
};
