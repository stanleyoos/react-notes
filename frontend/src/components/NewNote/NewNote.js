import React, { useState } from "react";

const NewNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showForm, setShowForm] = useState(false);

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
};

export default NewNote;
