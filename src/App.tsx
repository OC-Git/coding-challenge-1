import "./App.scss";

import { Canvas } from "react-three-fiber";
import { Scene } from "./components/base/Scene";

function App() {
    return (
        <>
            <Canvas camera={{ fov: 80, position: [0, 0, 50] }}>
                <Scene />
            </Canvas>
        </>
    );
}

export default App;
