import React, { useRef } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../redux/slices/auth_slice.js";

export default function SignUp() {
  const dispatch = useDispatch();
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const address = useRef("");
  const password = useRef("");

  const handleSignup = () => {
    const user = {
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      address: address.current.value,
      name: name.current.value,
    };
    dispatch(signup(user));
  };

  return (
    <div>
      <div className="vh-100 gap-3 container d-flex flex-column align-items-center justify-content-center">
        <div>
          <h2>Sign Up</h2>
        </div>
        <div style={{ width: "400px" }} className="d-flex flex-column gap-3">
          <div>
            <input
              ref={name}
              type="text"
              className="w-100"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <input
              ref={email}
              type="text"
              className="w-100"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <input
              ref={address}
              type="text"
              className="w-100"
              placeholder="Enter Address"
            />
          </div>
          <div>
            <input
              ref={phone}
              type="text"
              className="w-100"
              placeholder="Enter Phone"
            />
          </div>
          <div>
            <input
              ref={password}
              type="text"
              className="w-100"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <button className="btn btn-primary w-100" onClick={handleSignup}>
              SignUp
            </button>
          </div>
          <div>
            <p>
              Already have an account? <Link to={"/"}>Signin</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
