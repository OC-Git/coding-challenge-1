import { Dragable } from "../Base";
import { CameraControls } from "../Base/CameraControls/CameraControls";
import { AmbientLight, Bulb } from "../Elements";
import { Utility } from "../Utility";
import { Background } from "./Background/Background";

export const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Utility orbitControls axesHelper />
      <AmbientLight intensity={0.7} />
      <Dragable>
        <Bulb castShadow position={[-10, 30, -10]} args={[5, 20, 20]} />
      </Dragable>
      {children}
      <CameraControls />
      <Background />
    </>
  );
};
