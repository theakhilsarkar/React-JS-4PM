import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/slices/auth_slice";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);

  const email = useRef("");
  const password = useRef("");

  const handleSignin = () => {
    if (
      email.current.value === "admin@gmail.com" &&
      password.current.value === "123456"
    ) {
      navigate("/dashboard");
      return;
    }
    dispatch(
      signin({ email: email.current.value, password: password.current.value }),
    );
  };

  const navigateToHome = () => {
    if (currentUser) {
      navigate("/home");
    }
  };

  useEffect(() => {
    navigateToHome();
  }, [currentUser]);

  return (
    <div className="">
      <div className="vh-100 gap-3 container d-flex flex-column align-items-center justify-content-center">
        <div>
          <h2>Sign In</h2>
        </div>
        <div style={{ width: "400px" }} className="d-flex flex-column gap-3">
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
              ref={password}
              type="text"
              className="w-100"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <button className="btn btn-primary w-100" onClick={handleSignin}>
              SignIn
            </button>
          </div>
          <div>
            <p>
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
