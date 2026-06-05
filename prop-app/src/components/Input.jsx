import React from "react";

export default function Input({ set }) {
  return (
    <div>
      <input type="text" onChange={(e) => set(e.target.value)} />
      <button>Submit</button>
    </div>
  );
}
