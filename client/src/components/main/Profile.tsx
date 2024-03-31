import { Typography } from "@mui/material";
import profilepic from "../../assets/profile.png";
const profile = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ margin: "200px auto" }}
    >
      <img
        src={profilepic}
        alt="profile"
        width={100}
        style={{ borderRadius: "200px" }}
      />
      <Typography variant="h3">Name</Typography>
      <Typography variant="h5">Phone Number: </Typography>
    </div>
  );
};

export default profile;
