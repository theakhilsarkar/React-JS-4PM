import React from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Aman Gupta");
  return (
    <div>
      <Input set={setText} />
      <Display name={text} sirname="Gupta Ji" />
    </div>
  );
}
