import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { MdRecentActors } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Complaint from "./main/Complaint";
import Profile from "./main/Profile";
import Recent from "./main/Recent";

const Main = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("complaint");
  return (
    <div className="flex">
      <div
        style={{
          backgroundColor: "rgb(28,4,52)",
          width: "250px",
          height: "100vh",
        }}
      >
        <a href="" className="h-auto w-auto flex items-center">
          <a
            className="flex justify-center font-bold text-xl hover:text-violet-600 mb-16 mt-4"
            onClick={() => navigate("/home")}
          >
            Crime Report Library
          </a>
        </a>
        <button
          className="flex items-center p-8  hover:text-violet-500 text-xl"
          onClick={() => setCurrent("complaint")}
        >
          <ImProfile className="w-[20px] mx-2" />
          Complaints
        </button>
        <button
          className="flex items-center p-8  hover:text-violet-500 text-xl"
          onClick={() => setCurrent("recent")}
        >
          <MdRecentActors className="w-[20px] mx-2" />
          Recent
        </button>
        <button
          className="flex items-center p-8  hover:text-violet-500 text-xl"
          onClick={() => setCurrent("profile")}
        >
          <CgProfile className="w-[20px] mx-2" />
          Profile
        </button>
      </div>
      {current == "complaint" && <Complaint />}
      {current == "recent" && <Recent />}
      {current == "profile" && <Profile />}
    </div>
  );
};

export default Main;
