import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import stationScene from "../assets/3d/space_station.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function SpaceStation() {
  const stationRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(stationScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, stationRef);

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["Animation"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    stationRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (stationRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      stationRef.current.rotation.y = Math.PI;
    } else if (stationRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      stationRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (stationRef.current.rotation.y === 0) {
      // Moving forward
      stationRef.current.position.x += 0.01;
      stationRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      stationRef.current.position.x -= 0.01;
      stationRef.current.position.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={stationRef} position={[-5, 2, 1]} scale={[0.15, 0.15, 0.15]}>
      {/*  // use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={scene} />
    </mesh>
  );
}

export default SpaceStation;
