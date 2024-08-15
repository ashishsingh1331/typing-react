import { useRef } from "react";

export default function App() {
  // Type useRef carefully, pass null as default value
  const inputRef = useRef<HTMLInputElement>(null);

  inputRef.current?.focus();
  return <input ref={inputRef} />;
}
