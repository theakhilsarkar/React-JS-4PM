import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const fetchTodos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext value={{ count, increment, decrement, todos }}>
      {children}
    </TodoContext>
  );
}


