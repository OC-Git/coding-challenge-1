import "./App.scss";

import { Canvas } from "react-three-fiber";
import { Scene } from "./components/Scene/Scene";
import { ColorPicker } from "./components/Layout/ColorPicker/ColorPicker";
import { CameraPerspective } from "./components/Layout/CameraPerspective/CameraPerspective";

function App() {
  return (
    <>
      <ColorPicker />
      <Canvas
        shadows
        camera={{ position: [30, 35, 40] }}
        // gl={{
        //   powerPreference: "high-performance",
        //   antialias: false,
        //   stencil: false,
        //   depth: false,
        // }}
      >
        <Scene />
      </Canvas>
      <CameraPerspective />
    </>
  );
}

export default App;
