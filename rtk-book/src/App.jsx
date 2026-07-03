import React from "react";
import SignIn from "./screens/SignIn";
import { Route, Routes } from "react-router";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
