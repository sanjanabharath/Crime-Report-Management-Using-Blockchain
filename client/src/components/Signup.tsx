import { Button, Typography, Card, ThemeProvider } from "@mui/material/";
import { theme } from "../styles/theme";

const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: "90px auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography className="text-violet-500" variant="h3">
            SignUp
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            variant="outlined"
            style={{ width: "400px", padding: "20px", marginTop: "15px" }}
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              style={{ border: "2px solid #8B5CF6", borderRadius: "6px" }}
              className="w-full p-4 border-3 mb-4 border-violet-500"
            />
            <input
              type="text"
              className="w-full p-4 mb-4 border-violet-500"
              style={{ border: "2px solid #8B5CF6", borderRadius: "6px" }}
              placeholder="Enter Your Number"
            />
            <input
              type="text"
              className="w-full p-4 mb-4 border-violet-500"
              style={{ border: "2px solid #8B5CF6", borderRadius: "6px" }}
              placeholder="Enter Your Password"
            />
            <br />
            <Button
              className="bg-violet-500"
              variant="contained"
              style={{ marginTop: "15px", backgroundColor: "#8B5CF6" }}
            >
              SignUp
            </Button>
            <div style={{ margin: "8px" }}>
              Already an user?{" "}
              <a href="/signin" className="text-violet-500">
                Signin
              </a>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Signup;
