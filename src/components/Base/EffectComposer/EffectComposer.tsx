import { EffectComposer, GodRays, Vignette } from "@react-three/postprocessing";
import { useEffect, useState } from "react";
import { useThree } from "react-three-fiber";

export const Effects = () => {
  const [lights, setLights] = useState(null);
  const { scene }: any = useThree();

  useEffect(() => {
    if (scene.lights && scene.lights.length) {
      setLights(scene.lights);
    }
  }, [scene.lights]);

  if (!lights) return null;

  return (
    <EffectComposer>
      <Vignette eskil={false} offset={0.1} darkness={0.4} />

      {/* @ts-ignore */}
      {lights.map((light, index) => {
        return <GodRays key={index} sun={light.current} />;
      })}
    </EffectComposer>
  );
};
