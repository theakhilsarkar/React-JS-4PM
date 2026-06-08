import React from "react";
import Display from "./Display";
import { useState } from "react";

export default function Input({ appname }) {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      />
      <Display app={appname} name={name} setName={setName} />
    </div>
  );
}
