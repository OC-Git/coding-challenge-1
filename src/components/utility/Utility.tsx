import { OrbitControls } from "@react-three/drei";

interface Props {
    orbitControls?: boolean;
    axesHelper?: boolean;
}

export const Utility = ({ orbitControls = false, axesHelper = false }: Props) => {
    return (
        <>
            {orbitControls && <OrbitControls />}
            {axesHelper && <axesHelper args={[100]} />}
        </>
    );
};
