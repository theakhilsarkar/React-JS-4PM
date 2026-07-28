import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/users/HomeScreen";
import DashboardScreen from "./screens/admin/DashboardScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </div>
  );
}
