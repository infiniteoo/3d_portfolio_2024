import { useState, Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "../models/NewEarth";
import Starfield from "../models/Starfield";
import SpaceStation from "../models/SpaceStation";
import { Loader } from "../components";
import Shuttle from "../models/Shuttle";
import UFO from "../models/Ship";
import HomeInfo from "../components/HomeInfo";
import { Html } from "@react-three/drei";
import { soundon, soundoff } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
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
          <Html position={[1.6, -0.5, 0]}>
            <div className="info-board">
              <p>Spin the planet w/mouse (left/right keys)</p>
            </div>
          </Html>

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
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="Sound On"
          className="h-10 w-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          style={{ color: "#d4ac63" }}
        />
      </div>
    </section>
  );
};

export default Home;
