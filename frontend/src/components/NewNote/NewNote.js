import React, { useState } from "react";

const NewNote = ({ onAdd }) => {
  // create state using useState hook
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showForm, setShowForm] = useState(false);

  // create local note with title and body taken from state above
  // call parent's function onAdd with note as a parameter
  // clean inputs form and close the form
  const addNote = () => {
    const note = {
      title: title,
      body: desc,
    };
    onAdd(note);
    setDesc("");
    setTitle("");
    setShowForm(false);
  };

  // clicking Dodaj notatke is showing form with inputs
  // two inputs connected with state
  // button onClick={addNote}

  return showForm ? (
    <div className="note">
      <label>Tytuł: </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <label>Opis: </label>
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
      />
      <button onClick={addNote}>Dodaj notatkę</button>{" "}
    </div>
  ) : (
    <button onClick={() => setShowForm((c) => !c)}>Dodaj notatkę</button>
  );
  // on click toggle the value of showForm
};

export default NewNote;
