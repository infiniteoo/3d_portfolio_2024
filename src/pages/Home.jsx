import { useState, Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "../models/NewEarth";
import Starfield from "../models/Starfield";
import SpaceStation from "../models/SpaceStation";
import { Loader } from "../components";
import Shuttle from "../models/Shuttle";
import UFO from "../models/Ship";
import HomeInfo from "../components/HomeInfo";

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
  const adjustUFOForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.44, 0.44, 0.44];
      screenPosition = [0, -1, -4.5];
    }

    return [screenScale, screenPosition];
  };

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();
  const [ufoScale, ufoPosition] = adjustUFOForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-black
  ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 1] }} // Adjust the position values
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[-6, 2, 1]} intensity={8} />
          <ambientLight itensity={0} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0}
          />
          <Starfield />
          <SpaceStation earthPosition={earthPosition} />

          <Shuttle />
          <Earth
            position={earthPosition}
            scale={earthScale}
            rotation={earthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <UFO
            position={ufoPosition}
            scale={ufoScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
        {/* <Plane
          position={ufoPosition}
          scale={ufoScale}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          rotation={[0, 20, 0]}
        /> */}
      </Canvas>
    </section>
  );
};

export default Home;
