import creatureScene from "../assets/3d/creature.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Creature = ({ currentAnimation, isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(creatureScene);
  const { actions } = useAnimations(animations, ref);
  console.log("actions for creature", actions);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} scale={[3, 3, 3]} position={[1, -5.5, 1]} />
    </mesh>
  );
};

export default Creature;
