import { Physics } from "@react-three/cannon";
import { Floor, Bulb, AmbientLight, Background } from "../base";
import { Suspense } from "react";
import { Cupboard } from "../cupBoard";
import { Utility } from "../utility/Utility";
import { Dragable } from "./Dragable/Dragable";

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
            <Dragable>
                <Bulb position={[-15, 30, 2]} />
            </Dragable>
            <Physics>
                <Dragable>
                    <Cupboard {...cupboard} />
                </Dragable>
                <Floor receiveShadow />
                <Suspense fallback={null}>
                    <Background />
                </Suspense>
            </Physics>
        </>
    );
};
