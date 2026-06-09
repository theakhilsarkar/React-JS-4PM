import React, { useState } from "react";

export default function Input({ addNote, notes }) {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        placeholder="Enter note"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          addNote(title);
        }}
      >
        Add Note
      </button>
    </div>
  );
}

// input -> setTitle() -> title(state) ->setNotes() -> Notes -> Display -> notes -> each value display
