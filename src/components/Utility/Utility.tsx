import { OrbitControls } from "@react-three/drei";

interface Props {
  orbitControls?: boolean;
  axesHelper?: boolean;
}

export const Utility = ({ orbitControls = false, axesHelper = false }: Props): JSX.Element | null => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <>
      {orbitControls && <OrbitControls attach={"orbitControls"} />}
      {axesHelper && <axesHelper args={[100]} />}
    </>
  );
};
