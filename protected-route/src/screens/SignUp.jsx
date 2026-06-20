import React, { useState } from "react";
import { Link } from "react-router";

export default function SignUp() {
  const [user, setUser] = useState({});

  const getUsername = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const getPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div>
      <div>SignUp</div>
      <div>
        <input
          onChange={getUsername}
          type="text"
          placeholder="Enter new username"
        />
      </div>
      <div>
        <input
          onChange={getPassword}
          type="text"
          placeholder="Enter new password"
        />
      </div>
      <div>
        <button onClick={handleSignup}>SignUp</button>
      </div>
      <div>
        <p>
          Already have account? <Link to={"/"}>SignIn</Link>
        </p>
      </div>
    </div>
  );
}
