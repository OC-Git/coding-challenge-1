import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
import { Cupboard } from "../Mesh";
import { Stand } from "../Models/Stand";
import { Layout } from "../Layout/Layout";
import { Cubes } from "../Mesh/Cubes";
import { Floor } from "../Layout";

const cupboard = {
  bottom: true,
  back: true,
  sidewallLeft: true,
  sidewallRight: true,
  top: true,
  frontDoor: false,
  shelf: true,
};

export const Scene = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Physics>
          <Stand position={[14, 14, 0]} />
          <Cupboard {...cupboard} />
          <Cubes />
          <Floor receiveShadow args={[100, 100]} />
        </Physics>
      </Layout>
    </Suspense>
  );
};
