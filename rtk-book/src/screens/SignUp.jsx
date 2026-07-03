import React, { useRef } from "react";
import { Link } from "react-router";
import { signup } from "../redux/features/auth_slice.js";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <input ref={emailRef} type="text" placeholder="Enter email" />
      </div>
      <div>
        <input ref={passwordRef} type="text" placeholder="Enter password" />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(
              signup({
                email: emailRef.current.value,
                password: passwordRef.current.value,
              }),
            );
          }}
        >
          SignUp
        </button>
      </div>
      <p>
        Dont have an account? <Link to={"/"}>SignIn</Link>
      </p>
    </div>
  );
}
