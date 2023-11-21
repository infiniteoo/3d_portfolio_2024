// SpaceStation.jsx
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import stationScene from "../assets/3d/space_station.glb";

export function SpaceStation({ earthPosition }) {
  const stationRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(stationScene);

  // Get access to the animations for the space station
  const { actions } = useAnimations(animations, stationRef);

  // Play the animation when the component mounts
  useEffect(() => {
    actions["Animation"].play();
  }, []);

  useFrame(({ clock }) => {
    // Define the orbit parameters for a tighter orbit
    const radius = 5; // Adjust the radius of the orbit
    const speed = 0.2; // Adjust the speed of the orbit

    // Calculate the new position in a circular orbit around the center point
    const angle = clock.elapsedTime * speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // Update the position of the space station relative to the Earth
    stationRef.current.position.set(x + 1, 2, z - 6);

    // Note: You can adjust the initial position here to start the space station next to the Earth
    /*   stationRef.current.position.set(
      earthPosition[0] + x,
      earthPosition[1] + 2,
      earthPosition[2] + z
    ); */
  });

  return (
    <mesh ref={stationRef} position={[0, 2, 0]} scale={[0.1, 0.1, 0.1]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default SpaceStation;
