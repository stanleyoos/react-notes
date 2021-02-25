const Note = require("../db/models/note");

class NoteActions {
  saveNote(req, res) {
    //   const newNote = new Note({
    //     title: "Zrobić zakupy",
    //     body: "Mleko, płatki",
    //   });

    //   newNote.save().then(() => console.log("notatka została dodana"));

    //   res.send("Strona główna działa");
    const title = req.body.title;
    const body = req.body.body;

    res.send("Note: " + title + "  " + body);
  }
  getAllNotes(req, res) {
    res.send("Api działa    !!!!!");
  }

  getNote(req, res) {
    const id = req.params.id;
    res.send("Info o notatce " + id);
  }

  updateNote(req, res) {
    res.send("Notatka została zaktualizowana");
  }

  deleteNote(req, res) {
    const id = req.params.id;
    res.send("Notatka " + id + " zostala usunięta");
  }
}

module.exports = new NoteActions();
