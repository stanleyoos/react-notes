import React from "react";
import "./Notes.css";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote/EditNote";
import axios from "../axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class Notes extends React.Component {
  // constructor - special class method for creating and initializing an object
  constructor(props) {
    super(props);
    // super() method - calling parent class constructor and passing props to it
    this.state = {
      notes: [],
      showEditModal: false,
      editNote: {},
    };
  }

  // fetch all notes when component will be mounted
  componentDidMount() {
    this.fetchNotes();
  }

  // functions to work on data on server (with axios) using asyns/await syntax
  async fetchNotes() {
    const res = await axios.get("/notes");
    this.setState({ notes: res.data });
  }

  async deleteNote(_id) {
    // take all notes except the one with id we want to delete
    const notes = this.state.notes.filter((note) => note._id !== _id);

    // using axios delete the note on server
    await axios.delete("/notes/" + _id);

    // update the state
    this.setState({ notes });
  }

  // this function is called when Dodaj notatke is clicked in child component
  async addNote(note) {
    // first get all notes from state
    const notes = [...this.state.notes];

    // post new note and return it as NewNote
    try {
      const res = await axios.post("/notes/", note);
      const newNote = res.data;

      // push newNote to notes array and change the state
      notes.push(newNote);
      this.setState({ notes });
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  // this function is called when Zapisz button is clicked in child component
  async editNote(note) {
    // axios put function takes address as first parameter and data we want to push as the second one
    await axios.put("/notes/" + note._id, note);

    // find the index of the note in state
    const notes = [...this.state.notes];
    const index = notes.findIndex((x) => x._id === note._id);

    // update the note in array, update the state
    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }

  // keep it in state
  toggleModal() {
    this.setState({ showEditModal: !this.state.showEditModal });
  }

  // Note component: after click save note and close modal
  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }

  // render method : Three main components: NewNote, EditNote and Note
  // to show all Note's map through the state.notes
  render() {
    return (
      <div>
        <NotificationContainer />
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
