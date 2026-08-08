"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "John Doe",
    address: "TN89,L.A. ,USA",
  });
  const setUserData = (data) => {
    setUser(data);
  };
  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
