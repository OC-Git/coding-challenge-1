import { Physics, useBox } from "@react-three/cannon";
import { Floor, Bulb, AmbientLight, Background } from "../base";
import { Suspense } from "react";
import { Cupboard } from "../cupBoard";
import { Utility } from "../utility/Utility";
import { Dragable } from "./Dragable/Dragable";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

const cupboard = {
    bottom: true,
    back: true,
    sidewallLeft: true,
    sidewallRight: true,
    top: true,
    frontDoor: false,
    shelf: true,
};

const Cube = (props: any) => {
    const texture = useLoader(THREE.TextureLoader, "/woodBright.jpg");
    const [ref, api]: any = useBox(() => ({
        mass: 1,
        args: props.args,
        position: props.position,
        castShadow: props.castShadow,
        rotation: props.rotation,
    }));

    return (
        <mesh api={api} ref={ref} {...props}>
            <boxBufferGeometry args={props.args} />
            <meshPhysicalMaterial map={texture} color={"white"} roughness={0} clearcoat={1} reflectivity={1} />
        </mesh>
    );
};

export const Scene = (): JSX.Element => {
    return (
        <Suspense fallback={null}>
            <Utility orbitControls axesHelper />
            <AmbientLight intensity={0.7} />
            <Dragable>
                <Bulb castShadow position={[-10, 30, -10]} args={[5, 20, 20]} />
            </Dragable>
            <Physics>
                <Cupboard {...cupboard} />
                <Dragable>
                    <Cube castShadow position={[-15, 20, 0]} args={[10, 10, 10]} rotation={[1, 1, 0]} />
                    <Cube castShadow position={[-15, 5, 0]} args={[10, 10, 10]} />
                </Dragable>

                <Floor receiveShadow args={[100, 100]} />
                <Background />
            </Physics>
        </Suspense>
    );
};
