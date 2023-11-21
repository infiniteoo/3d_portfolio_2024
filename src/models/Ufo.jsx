import ufoScene from "../assets/3d/ufo.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const UFO = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(ufoScene);
  const { actions } = useAnimations(animations, ref);
  console.log("actions for ufo", actions);

  useEffect(() => {
    if (isRotating) {
      actions["Hovering"].play();
    } else {
      actions["Hovering"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default UFO;
