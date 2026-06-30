import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

export default function Home() {
  const { count, increment, decrement } = useContext(TodoContext); // use
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
}
