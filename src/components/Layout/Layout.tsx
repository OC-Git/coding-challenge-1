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
      <directionalLight
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
        position={[6, 3, 0]}
        intensity={0.5}
        castShadow
      />
      <Dragable>
        <Bulb castShadow position={[-10, 30, -10]} args={[5, 20, 20]} />
      </Dragable>
      {children}
      <CameraControls />
      <Background />
    </>
  );
};
