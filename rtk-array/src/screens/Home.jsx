import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/notes_slice.js";

export default function Home() {
  const dispatch = useDispatch();
  const { notes, count } = useSelector((state) => state.notes);
  return (
    <div>
      <h1>Home</h1>
      {notes.map((note, i) => (
        <h2 key={i}>{note}</h2>
      ))}
      <button onClick={() => dispatch(add("passed value"))}>Add</button>
      <button onClick={() => dispatch(remove())}>Remove</button>
    </div>
  );
}
