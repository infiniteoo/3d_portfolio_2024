import shipScene from "../assets/3d/ship.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Ship = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, ref);
  console.log("actions for ship", actions);

  useEffect(() => {
    if (isRotating) {
      actions["Animation"].play();
    } else {
      actions["Animation"].play();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Ship;
