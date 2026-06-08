import React from "react";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

export default function App() {
  const appName = "UserInfo App";
  return (
    <>
      <Navbar name={appName} />
      <Home name={appName} />
    </>
  );
}
