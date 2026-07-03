import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBook,
  updateBook,
  removeBook,
} from "../redux/features/book_slice.js";

export default function Home() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  const titleRef = useRef("");
  const authorRef = useRef("");
  return (
    <div>
      <h1>Book Dashboard</h1>
      <div>
        <input type="text" ref={titleRef} />
        <input type="text" ref={authorRef} />
        <button
          onClick={() =>
            dispatch(
              addBook({
                title: titleRef.current.value,
                author: authorRef.current.value,
              }),
            )
          }
        >
          Add Book
        </button>
      </div>
      <div>
        {books.map((book, i) => (
          <div key={i}>
            <p>
              <b>{book.title}</b>
            </p>
            <p>
              <i>{book.author}</i>
            </p>
            <button onClick={() => dispatch(removeBook(i))}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// thunk - delays
