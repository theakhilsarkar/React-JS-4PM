import React from "react";

export default function Display({ notes }) {
  return (
    <div>
      Display
      {notes.map((note) => (
        <p>{note}</p>
      ))}
    </div>
  );
}
