import React, { useState, useEffect } from "react";
import SignIn from "../screens/SignIn";

export default function ProtectedRoute({ children }) {
  const [authenticate, setAuthenticate] = useState(false);

  const handleAuthentication = () => {
    const credential = JSON.parse(localStorage.getItem("user")) || null;
    if (credential) {
      setAuthenticate(true);
    } else {
      setAuthenticate(false);
    }
  };

  useEffect(() => {
    handleAuthentication();
  }, []);

  if (authenticate) {
    return children;
  } else {
    return <SignIn to="/" />;
  }
}
