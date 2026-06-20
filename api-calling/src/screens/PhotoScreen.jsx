import React, { useEffect, useState } from "react";

export default function PhotoScreen() {
  const [photos, setPhotos] = useState([]);
  const [pagienation, setPagienation] = useState({ start: 0, end: 9 });

  // const fetchPhotos = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   const data = await res.json();
  //   setPhotos(data);
  // };

  // node package manager - node js, npm i axios

  const handlePagination = (e) => {
    let page;
    if (e.target.value == "") {
      page = 1;
    } else {
      page = Number(e.target.value);
    }
    const start = (page - 1) * 10;
    const end = start + 9;
    setPagienation({ ...pagienation, start, end });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo, i) => {
        if (i >= pagienation.start && i <= pagienation.end) {
          return (
            <div key={i}>
              <p>
                {i + 1} {photo.title}
              </p>
            </div>
          );
        }
        return;
      })}
      <button
        onClick={() => {
          setPagienation({
            ...pagienation,
            start: pagienation.start + 10,
            end: pagienation.end + 10,
          });
        }}
      >
        Next++
      </button>
      <input type="text" onChange={handlePagination} />
    </div>
  );
}

// 5000
// 1 -> 10 - 0 to 9
// 2 -> 10 - 10 to 19

// page = 1 -> start = 0, end = 9
// 1 -> 0, 9
// -1, *0, %1
// *9, +8,

// page = 2 -> start = 10, end = 19
// page = 3 -> start = 20, end = 29
// page = 4 -> start = 30, end = 29

// start = (page-1)*10
//       = (6-1)*10
//       = 5*10 = 50 + 9

//
// page = page + 1
// start =
// end

// 1 2 3 4 5 6....

//
