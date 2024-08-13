import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="Ashish" age={28} address={{ street: "Janakpuri" }} />
    </>
  );
}

export default App;
