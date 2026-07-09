import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBook,
  fetchBooks,
  postBook,
  searchBook,
} from "../redux/slices/bookSlice.js";

export default function Books() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);
  const titleRef = useRef("");
  const authorRef = useRef("");
  const searchRef = useRef("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <div>
        <input ref={searchRef} type="text" />
        <button
          onClick={() => {
            dispatch(searchBook(searchRef.current.value));
          }}
        >
          Search
        </button>
        <button onClick={() => dispatch(fetchBooks())}>Reset</button>
      </div>
      <div>
        <input type="text" ref={titleRef} />
        <input type="text" ref={authorRef} />
        <button
          onClick={() =>
            dispatch(
              postBook({
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
        {loading ? (
          <p>Loading.........</p>
        ) : error == null ? (
          books.map((book, i) => (
            <div key={i}>
              <p>{book.title}</p>
              <i>{book.author}</i>
              <button
                onClick={() => {
                  dispatch(deleteBook(book.id));
                }}
              >
                -
              </button>
            </div>
          ))
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}
