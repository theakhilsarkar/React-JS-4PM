"use client";
import { useContext } from "react";
import { UserContext } from "../../components/UserProvider.jsx";
export default function User() {
  const { user } = useContext(UserContext);
  return <div>USER - {user.name}</div>;
}

// context -> counter App, ++,--
// provider
// pass
// use
