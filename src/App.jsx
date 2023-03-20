import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Landing from "./pages/Landing/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-slate-900 min-h-screen">
      <Landing></Landing>
    </div>
  );
}

export default App;
