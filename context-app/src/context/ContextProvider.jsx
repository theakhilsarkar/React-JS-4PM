import React, { useState, useContext, createContext } from "react";

export const CounterContext = createContext(); // when you want to create context

export default function ContextProvider({ children }) {
  const [count, setCount] = useState(10);

  const addition = () => setCount(count + 1);
  const substraction = () => setCount(count - 1);

  return (
    <CounterContext value={{ count, addition, substraction }}>
      {children}
    </CounterContext>
  );
}

// useContext -> in component/screen, to use state defined in the context.

// context
// 1. direct koi update method ko send nahi karana hai in context provider
// 2. send only setter(method which change value of state as per your need) in provider
