// SpaceStation.jsx
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import stationScene from "../assets/3d/shuttle.glb";

export function Shuttle({ earthPosition }) {
  const shuttleRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(stationScene);

  // Get access to the animations for the space station
  const { actions } = useAnimations(animations, shuttleRef);
  console.log("actions for shuttle", actions);

  // Play the animation when the component mounts
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock }) => {
    // Define the orbit parameters for a tighter orbit
    const radius = 5; // Adjust the radius of the orbit
    const speed = 0.2; // Adjust the speed of the orbit

    // Calculate the new position in a circular orbit around the center point
    const angle = -clock.elapsedTime * speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // Update the position of the space station relative to the Earth
    shuttleRef.current.position.set(x + 1, -1, z - 6);

    // Note: You can adjust the initial position here to start the space station next to the Earth
    /*   shuttleRef.current.position.set(
      earthPosition[0] + x,
      earthPosition[1] + 2,
      earthPosition[2] + z
    ); */
  });

  return (
    <mesh ref={shuttleRef} position={[2, 2, 0]} scale={[0.005, 0.005, 0.005]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Shuttle;
