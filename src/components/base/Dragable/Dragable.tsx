//@ts-nocheck
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { extend, useThree } from "react-three-fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

export const Dragable: React.FC = ({ children }): JSX.Element => {
    const {
        camera,
        gl: { domElement },
        scene,
    } = useThree();

    const groupRef: RefObject<ReactNode> | any = useRef();
    const controlsRef: RefObject<ReactNode> | any = useRef();

    const [boxChildren, setBoxChildren] = useState([]);

    useEffect(() => {
        setBoxChildren(groupRef.current.children);
    }, []);

    useEffect(() => {
        controlsRef.current.addEventListener("hoveron", () => {
            scene.orbitControls.enabled = false;
        });

        controlsRef.current.addEventListener("hoveroff", () => {
            scene.orbitControls.enabled = true;
        });
    }, [boxChildren, scene.orbitControls]);

    return (
        <group ref={groupRef}>
            <dragControls ref={controlsRef} args={[boxChildren, camera, domElement]} />
            {children}
        </group>
    );
};
