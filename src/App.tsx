import "./App.scss";

import { Canvas } from "react-three-fiber";
import { Scene } from "./components/base/Scene";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";

function App() {
    return (
        <>
            <ColorPicker />
            <Canvas shadows camera={{ position: [30, 35, 40] }}>
                <Scene />
            </Canvas>
        </>
    );
}

export default App;
