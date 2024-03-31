import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[85px] top-0  backdrop-blur-md z-[50] px-7">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        <a href="" className="h-auto w-auto flex items-center">
          <a
            className="flex justify-center font-bold text-xl hover:text-violet-600"
            onClick={() => navigate("/home")}
          >
            Crime Report Library
          </a>
        </a>

        <div className="hidden md:flex w-[300px] items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-0 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              className="cursor-pointer hover:text-violet-600"
              onClick={() => navigate("/")}
            >
              Home
            </a>

            <a
              className="cursor-pointer hover:text-violet-600"
              onClick={() => navigate("/signup")}
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
