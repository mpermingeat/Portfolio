import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-primaryDark min-h-screen w-full">
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  );
}

export default App;
