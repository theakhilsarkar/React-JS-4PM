import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

export default function Todo() {
  const { todos } = useContext(TodoContext);
  return <div>{todos.length}</div>;
}
