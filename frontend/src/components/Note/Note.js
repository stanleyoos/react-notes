import React, { useState } from "react";

const Note = ({ body, title, onDelete, id, onEdit }) => {
  const [toggleDesc, setToggleDesc] = useState(false);

  const editHandler = () => {
    onEdit({ title: title, body: body, id: id });
  };
  return (
    <div className="note">
      <p onClick={() => setToggleDesc((c) => !c)}>{title}</p>
      {toggleDesc && <div className="description">{body}</div>}
      <button onClick={editHandler}>edytuj</button>
      <button onClick={() => onDelete(id)} className="delete">
        usuń
      </button>
    </div>
  );
};

export default Note;
