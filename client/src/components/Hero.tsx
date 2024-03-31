import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="text-center flex flex-col">
        <div className="flex justify-center mt-36 mb-12">
          <h1 className="text-6xl w-1/2 ">
            File your <span className="text-violet-500">complaint</span> and
            send it your nearest police station using{" "}
            <span className="text-violet-500">Blockchain</span>.
          </h1>
        </div>

        <div className="flex justify-center">
          <button
            className="w-3/12 rounded py-2 text-2xl bg-violet-500 hover:bg-violet-600"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
