const Note = require("../db/models/note");

module.exports = {
  saveNote: function (req, res) {
    const newNote = new Note({
      title: "Zrobić zakupy",
      body: "Mleko, płatki",
    });

    newNote.save().then(() => console.log("notatka została dodana"));

    res.send("Strona główna działa");
  },
};
