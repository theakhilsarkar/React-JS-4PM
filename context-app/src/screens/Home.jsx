import React, { useContext } from "react";
import { CounterContext } from "../context/ContextProvider";

export default function Home() {
  const { count } = useContext(CounterContext);
  return (
    <div>
      Home
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
}
