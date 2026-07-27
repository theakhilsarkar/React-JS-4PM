import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
