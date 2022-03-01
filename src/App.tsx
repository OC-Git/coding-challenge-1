import './App.scss';

import { Canvas } from 'react-three-fiber';
import { Scene } from './components/base/Scene';

function App() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
