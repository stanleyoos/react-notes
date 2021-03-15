import React, { useState } from "react";

const Note = ({ body, title, onDelete, _id, onEdit }) => {
  const [toggleDesc, setToggleDesc] = useState(false);

  const editHandler = () => {
    onEdit({ title: title, body: body, _id: _id });
  };
  return (
    <div className="note">
      <p onClick={() => setToggleDesc((c) => !c)}>{title}</p>
      {toggleDesc && <div className="description">{body}</div>}
      <button onClick={editHandler}>edytuj</button>
      <button onClick={() => onDelete(_id)} className="delete">
        usuń
      </button>
    </div>
  );
};

export default Note;
