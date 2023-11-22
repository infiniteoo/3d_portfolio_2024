import { Html } from "@react-three/drei";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-76 border-slate-200 border-t-blue-900 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
