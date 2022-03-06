import "./App.scss";

import { Canvas } from "react-three-fiber";
import { Scene } from "./components/base/Scene";

function App() {
    return (
        <Canvas shadows camera={{ position: [30, 20, 50] }}>
            <Scene />
        </Canvas>
    );
}

export default App;
