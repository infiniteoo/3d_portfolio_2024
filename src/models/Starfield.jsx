// Starfield.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Starfield = () => {
  const starsRef = useRef();

  useFrame(() => {
    // Twinkle effect: Randomly change intensity of stars
    starsRef.current.children.forEach((star) => {
      star.intensity = Math.sin(Date.now() * 0.00005) * 0.5 + 0.5;
    });
  });

  return (
    <Stars
      ref={starsRef}
      radius={200}
      depth={60}
      count={5000}
      factor={7}
      saturation={0}
      fade
    />
  );
};

export default Starfield;
