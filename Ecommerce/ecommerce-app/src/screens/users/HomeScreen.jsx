import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div>
      <div>HomeScreen</div>
      <div>
        <p>{currentUser.name}</p>
        <p>{currentUser.email}</p>
        <p>{currentUser.phone}</p>
      </div>
    </div>
  );
}
