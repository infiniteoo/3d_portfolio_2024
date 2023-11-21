import { useState, Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "../models/NewEarth";
import Starfield from "../models/Starfield";
import SpaceStation from "../models/SpaceStation";
import { Loader } from "../components";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustEarthForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -10]; // Adjust the third value to bring the Earth closer

    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [50, 50, 50];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent
  ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 1] }} // Adjust the position values
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight itensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <SpaceStation />
          {/* <Starfield isRotating={isRotating} scale={0.2} /> */}
          <Earth
            position={earthPosition}
            scale={earthScale}
            rotation={earthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
        {/* <Plane
          position={planePosition}
          scale={planeScale}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          rotation={[0, 20, 0]}
        /> */}
      </Canvas>
    </section>
  );
};

export default Home;
