"use client";

import axios from "axios";
import { useRef } from "react";

export default function Home() {
  const handleBlogInput = async () => {
    const blog = {
      title: title.current.value,
      category: category.current.value,
      description: description.current.value,
    };
    const res = await axios.post("http://localhost:3001/blogs", blog);
    console.log(res.data);
  };

  const title = useRef("");
  const category = useRef("");
  const description = useRef("");

  return (
    <>
      <div className="flex justify-center p-3">
        <div className="flex flex-col gap-3">
          <div>
            <input
              ref={title}
              className="border p-3 rounded w-100"
              placeholder="Enter Blog Title"
            ></input>
          </div>
          <div>
            <input
              ref={category}
              className="border p-3 rounded w-100"
              placeholder="Enter Blog Category"
            ></input>
          </div>
          <div>
            <input
              ref={description}
              className="border p-3 rounded w-100"
              placeholder="Enter Blog Description"
            ></input>
          </div>
          <div>
            <button
              onClick={handleBlogInput}
              className="w-100 py-2 rounded bg-blue-500 text-white font-bold"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
