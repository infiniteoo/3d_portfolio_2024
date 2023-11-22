import shipScene from "../assets/3d/ship.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Ship = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, ref);
  console.log("actions for ship", actions);
  console.log("ship model", scene);

  useEffect(() => {
    if (isRotating) {
      actions["Animation"].play();
    } else {
      actions["Animation"].play();
    }
  }, [actions, isRotating]);

  // Adjusting material transparency
  /*   scene.traverse((child) => {
    if (child.isMesh) {
      // Assuming that the model uses MeshStandardMaterial
      // You might need to adjust this based on the actual material used in your model
      if (child.material) {
        child.material.transparent = true;
        child.material.opacity = 0.5; // Adjust the opacity value (0 to 1)
      }
    }
  }); */

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Ship;
