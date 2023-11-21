// NewEarth.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import earthScene from "../assets/3d/earth.glb";
import { useFrame } from "@react-three/fiber";

const NewEarth = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) => {
  const { nodes, materials, animations } = useGLTF(earthScene);
  const earthRef = useRef();
  const { actions } = useAnimations(animations, earthRef);

  // Play the animation when the component mounts

  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Set an initial rotation to angle the Earth slightly off-axis
  useEffect(() => {
    earthRef.current.rotation.x = Math.PI / 10; // Adjust the angle as needed
  }, []);

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      earthRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on Earth's orientation
      const rotation = earthRef.current.rotation.y;

      // Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI]
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on Earth's orientation
      switch (true) {
        // Adjust these angles based on your specific requirements
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <group scale={0.1}>
        <mesh
          geometry={nodes.pSphere1_phong1_0.geometry}
          material={materials.phong1}
        />
        <mesh
          geometry={nodes.pSphere1_phong1_0_1.geometry}
          material={materials.phong1}
        />
      </group>
      <group scale={0.1}>
        <mesh
          geometry={nodes.pSphere4_lambert6_0.geometry}
          material={materials.lambert6}
        />
        <mesh
          geometry={nodes.pSphere4_lambert6_0_1.geometry}
          material={materials.lambert6}
        />
      </group>
      <group scale={0.1}>
        <mesh
          geometry={nodes.pSphere5_lambert7_0.geometry}
          material={materials.lambert7}
        />
        <mesh
          geometry={nodes.pSphere5_lambert7_0_1.geometry}
          material={materials.lambert7}
        />
      </group>
    </group>
  );
};

export default NewEarth;
