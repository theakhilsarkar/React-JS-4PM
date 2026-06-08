import React from "react";

export default function Display({ app, name, setName }) {
  return (
    <div>
      <h3>{app}</h3>
      Display
      <p>
        {name} -{" "}
        <button
          onClick={() => {
            setName("");
          }}
        >
          Clear
        </button>
      </p>
    </div>
  );
}
