import React, { useState } from "react";
import Child from "./Components/Child";
import Button from "./Components/Button";

export default function App() {
  const [value, setValue] = useState<number[]>();
  return (
    <h1>
      <Button outline={true}>HI i am button</Button>
      <input type="text" value={value} onChange={(e) => setValue([1, 2, 3])} />
    </h1>
  );
}
