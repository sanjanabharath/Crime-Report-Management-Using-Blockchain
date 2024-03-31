import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Options from "./components/Options";
import Main from "./components/Main";
import Official from "./components/officials/Official";

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/options" element={<Options />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/userpage" element={<Main />} />
          <Route path="/officialpage" element={<Official />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
