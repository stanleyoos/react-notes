import React from "react";
import "./Notes.css";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote/EditNote";
import axios from "axios";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      showEditModal: false,
      editNote: {},
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const res = await axios.get("http://localhost:3001/api/notes");
    this.setState({ notes: res.data });
  }

  async deleteNote(_id) {
    const notes = this.state.notes.filter((note) => note._id !== _id);

    await axios.delete("http://localhost:3001/api/notes/" + _id);

    this.setState({ notes });
  }

  async addNote(note) {
    const notes = [...this.state.notes];

    const res = await axios.post("http://localhost:3001/api/notes/", note);
    const newNote = res.data;

    notes.push(newNote);
    this.setState({ notes });
  }

  async editNote(note) {
    await axios.put("http://localhost:3001/api/note/" + note._id, note);

    const notes = [...this.state.notes];
    const index = notes.findIndex((x) => x._id === note._id);

    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ showEditModal: !this.state.showEditModal });
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }

  render() {
    return (
      <div>
        <NewNote onAdd={(note) => this.addNote(note)} />
        <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatkę">
          <EditNote
            title={this.state.editNote.title}
            body={this.state.editNote.body}
            _id={this.state.editNote._id}
            onEdit={(note) => this.editNote(note)}
          />
          <button onClick={() => this.toggleModal()}>Anuluj</button>
        </Modal>
        {this.state.notes.map((note) => (
          <Note
            key={note._id}
            title={note.title}
            body={note.body}
            _id={note._id}
            onEdit={(note) => this.editNoteHandler(note)}
            onDelete={(_id) => this.deleteNote(_id)}
          />
        ))}
      </div>
    );
  }
}

export default Notes;
