import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, postBook } from "../redux/slices/bookSlice.js";

export default function Books() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <button
        onClick={() =>
          dispatch(postBook({ title: "America", author: "Captain" }))
        }
      >
        Add Book
      </button>
      <div>
        {loading ? (
          <p>Loading.........</p>
        ) : error == null ? (
          books.map((book, i) => (
            <div key={i}>
              <p>{book.title}</p>
              <i>{book.author}</i>
            </div>
          ))
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}
