import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUsername = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const getPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleSignin = () => {
    const credential = JSON.parse(localStorage.getItem("user")) || {};
    if (
      credential.username == user.username &&
      credential.password == user.password
    ) {
      navigate("/home");
    } else {
      alert("Username or password is invalid !");
    }
  };

  return (
    <div>
      <div>SignIn</div>
      <div>
        <input
          onChange={getUsername}
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input
          onChange={getPassword}
          type="text"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button onClick={handleSignin}>SignIn</button>
      </div>
      <div>
        <p>
          Dont have account? <Link to={"/signup"}>SignUp</Link>
        </p>
      </div>
    </div>
  );
}
