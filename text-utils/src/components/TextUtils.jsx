import React, { useState } from "react";

export default function TextUtils() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Text Utils</h2>
        <div className="form-floating my-4">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="form-control"
            placeholder="Enter something amazing.."
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Content</label>
        </div>
        <hr />
        <p>{text}</p>
        <div>
          <button
            onClick={() => {
              setText(text.toLowerCase());
            }}
            className="btn btn-primary"
          >
            To Uppercase
          </button>
        </div>
        <ul>
          <li>Total Length - {text.length}</li>
          <li>Total Words - {text.split(" ").length}</li>
        </ul>
      </div>
    </>
  );
}

// Text Utils - Text utility system - different types string opertion

// Input -> user value input

// how many text length
// how many words

// to uppercase - button
// to lowercase - button

// reading speed - button

// total words/200 -> 2.3 minutes

// useState

// textutils - PR

// video example video - english

// 30% - video - 3

// 