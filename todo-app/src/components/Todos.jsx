// variable vs state(change-> component re-render/refresh)
// react -> useState

import { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([{ title: "Singing at 12AM" }]);
  const [title, setTitle] = useState("");
  const [hide, setHide] = useState(true); // let hide = true;
  const [index, setIndex] = useState(0);

  const setIntoLS = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
  };
  const getFromLS = () => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  };

  // useEffect is used to handle side effect.
  // useEffect execute first time when component render first time.
  useEffect(() => {
    getFromLS();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="mt-4">
            <h2>Daily Notes</h2>
            <p>Structure your thoughts by daily notes...</p>
          </div>
          <div className="d-flex my-5">
            <input
              placeholder="Favourite Poet, Story, Grocery Bill etc."
              className="form-control"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />

            <button
              onClick={() => {
                const temp = [...todos];
                temp[index].title = title;
                setTodos(temp);
                setHide(true);
                setTitle("");
              }}
              className={"btn btn-warning ms-3 " + (hide ? "d-none" : "")}
            >
              Update
            </button>

            <button
              onClick={() => {
                const temp = [...todos];
                temp.push({ title });
                setTodos(temp);
                // setTodos([...todos, { title }]); // {title:"hello"}
                setIntoLS(temp);
              }}
              className={
                "btn btn-primary mx-3 " + (title === "" ? "disabled" : "")
              }
            >
              Add
            </button>
          </div>
          <div className="">
            {todos.map((todo, i) => (
              <div key={i} className="">
                <p className="">
                  {todo.title}{" "}
                  <button
                    onClick={() => {
                      // const temp = [...todos];
                      // temp.splice(i, 1);
                      // setTodos(temp);

                      // setTodos([...todos].splice(i,1))

                      setTodos(todos.filter((t, ti) => ti != i));
                    }}
                    className="btn ri-close-circle-line fs-3 text-danger"
                  ></button>
                  <button
                    onClick={() => {
                      setTitle(todos[i].title); // is used to update state(title)/.
                      setHide(false);
                      setIndex(i);
                    }}
                    className="btn ri-edit-circle-line fs-3 text-primary"
                  ></button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Todos;

// 1. add todo
// 2. empty field - add button disabled
// 3. remove todo - extra

// remove each todo
// edit icon - onclick -> display update button in input section
// on click of update => hide update button
