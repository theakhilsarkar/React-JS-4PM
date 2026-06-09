import React, { useState } from "react";

import Input from "./components/Input";
import Display from "./components/Display";

export default function () {
  const [notes, setNotes] = useState([]); // global - access input,display
  const addNote = (title) => {
    setNotes([...notes, title]);
  };
  return (
    <>
      <Input notes={notes} addNote={addNote}/>
      <Display notes={notes} />
    </>
  );
}

//note app - crud - local storage
// logic must be in app component
