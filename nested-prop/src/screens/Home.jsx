import React from "react";
import Input from "../components/Input";

export default function Home({ name }) {
  return (
    <div>
      <Input appname={name} />
    </div>
  );
}
