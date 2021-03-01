import React from "react";

const Note = ({ title, body }) => {
  return (
    <div className="note">
      <p>{title}</p>
      <div className="description">{body}</div>
      <button>edytuj</button>
      <button className="delete">usuń</button>
    </div>
  );
};

export default Note;
