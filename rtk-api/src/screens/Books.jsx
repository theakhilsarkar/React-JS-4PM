import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBook,
  fetchBooks,
  postBook,
  searchBook,
  sortBook,
} from "../redux/slices/bookSlice.js";

export default function Books() {
  const [isSort, setSort] = useState(false);
  const [page, setPage] = useState({ start: 0, end: 4 });

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
        <button
          onClick={() => {
            setSort(!isSort);
            dispatch(sortBook(isSort));
          }}
        >
          Sort
        </button>
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
        {[1, 2, 3, 4, 5, 6].map((x, i) => (
          <button
            key={i}
            onClick={() => {
              setPage({ start: (x - 1) * 5, end: (x - 1) * 5 + 4 });
              console.log(page.start, page.end);
            }}
          >
            {x}
          </button>
        ))}
      </div>
      <div>
        {loading ? (
          <p>Loading.........</p>
        ) : error == null ? (
          books.map((book, i) => {
            if (i >= page.start && i <= page.end) {
              return (
                <div
                  style={{ margin: "10px", backgroundColor: "lightblue" }}
                  key={i}
                >
                  <p>
                    {i + 1 + ". "}
                    {book.title}
                  </p>
                  <i>{book.author}</i>
                  <p>{book.category}</p>
                  <p>{book.price}</p>
                  <button
                    style={{ margin: "10px", padding: "10px 20px" }}
                    onClick={() => {
                      dispatch(deleteBook(book.id));
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            }
            return <></>;
          })
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}

// vishal - regular, with laptop, Backend Dev.
// prince - regular, with laptop, Backend Dev.
// darshan - regular, with laptop, Backend Dev.
// sakshi - iregular, with laptop, Backend Dev.

// sahil - iregular, with laptop, Frontend Dev.
// jayesh - regular, with laptop, Frontend Dev.
// sachin - regular, with laptop, Frontend Dev.
// roushan - regular, no laptop, Frontend Dev.
// om - regular, with laptop, Frontend Dev.
// avnish - iregular, no laptop, Frontend Dev.
// gaurav - regular, with laptop, Frontend Dev.
// isha - iregular, no laptop, Frontend Dev.

// 3 - 2F,1B

// 1 month from 20 july
// petrol - 100

// surat it hub - learning, 
// UIUX, VE,app,web,desktop,
// UPSC  - delhi


