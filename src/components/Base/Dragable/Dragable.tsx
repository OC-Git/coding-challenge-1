//@ts-nocheck
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { extend, useThree } from "react-three-fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

interface Props {
  transformGroup?: boolean;
}

export const Dragable: React.FC<Props> = ({ transformGroup = false, children }): JSX.Element => {
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

    controlsRef.current.addEventListener("drag", (event) => {
      event.object.api?.position.copy(event.object.position);
      event.object.api?.velocity.set(0, 0, 0);
    });

    controlsRef.current.addEventListener("dragstart", (event) => {
      event.object.api?.mass.set(0);
    });

    controlsRef.current.addEventListener("dragend", (event) => {
      event.object.api?.mass.set(1);
    });
  }, [boxChildren, scene.orbitControls]);

  return (
    <group ref={groupRef}>
      <dragControls transformGroup={transformGroup} ref={controlsRef} args={[boxChildren, camera, domElement]} />
      {children}
    </group>
  );
};
