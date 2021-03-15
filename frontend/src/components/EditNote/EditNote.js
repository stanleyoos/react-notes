import React, { useState } from "react";

const EditNote = (props) => {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.body);

  const editNote = () => {
    const note = {
      title: title,
      body: desc,
      _id: props._id,
    };
    props.onEdit(note);
  };

  return (
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
      <button onClick={() => editNote()}>Zapisz</button>{" "}
    </div>
  );
};

export default EditNote;
