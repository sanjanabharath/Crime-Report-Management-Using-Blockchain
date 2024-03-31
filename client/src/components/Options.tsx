import { Card } from "@mui/material";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";

const Options = () => {
  return (
    <div className="flex justify-center mt-36">
      <Card
        variant="outlined"
        style={{ width: "400px", padding: "20px", marginTop: "15px" }}
        className="flex"
      >
        <button
          className="flex flex-col items-center text-violet-500 p-8 mx-3"
          style={{ border: "2px solid #8B5CF6", borderRadius: "6px" }}
        >
          <GiPoliceOfficerHead />
          Police Officer
        </button>
        <button
          className="flex flex-col items-center text-violet-500 p-8 mx-3"
          style={{ border: "2px solid #8B5CF6", borderRadius: "6px" }}
        >
          <IoPeople />
          Common People
        </button>
      </Card>
    </div>
  );
};

export default Options;
