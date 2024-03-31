import { Button, Typography, Card, ThemeProvider } from "@mui/material/";
import { theme } from "../styles/theme";

const Signin = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: "90px auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography className="text-violet-500" variant="h3">
            SignIn
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            variant="outlined"
            style={{ width: "400px", padding: "20px", marginTop: "15px" }}
          >
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
              style={{ marginTop: "8px", backgroundColor: "#8B5CF6" }}
            >
              Signin
            </Button>
            <div style={{ margin: "8px" }}>
              New user?{" "}
              <a href="/signup" className="text-violet-500">
                Signup
              </a>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Signin;
