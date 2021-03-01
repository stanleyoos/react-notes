import React from "react";
import "./Notes.css";
import Note from "./Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [
      {
        id: 1,
        title: "Tytul",
        body: "cialo notatki",
      },
      {
        id: 2,
        title: "Tytul 2",
        body: "cialo kolejnej notatki",
      },
    ];
  }
  render() {
    return (
      <div>
        {this.notes.map((note) => (
          <Note title={note.title} body={note.body} />
        ))}
      </div>
    );
  }
}

export default Notes;
