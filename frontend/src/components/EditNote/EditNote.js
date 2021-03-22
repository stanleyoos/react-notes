import React, { useState } from "react";

const EditNote = (props) => {
  // create local state using hooks and set it with props
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.body);

  // create local note with title, body, id
  // invoke parent's function onEdit with edited note
  const editNote = () => {
    const note = {
      title: title,
      body: desc,
      _id: props._id,
    };
    props.onEdit(note);
  };

  return (
    // two inputs with value and onChange connected with state
    // on click Zapisz calls editNote
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
      <button onClick={() => editNote()}>Zapisz</button>
    </div>
  );
};

export default EditNote;
