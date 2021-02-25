const express = require("express");
const router = express.Router();

const noteActions = require("../actions/noteActions");

// pobieranie notatek
router.get("/notes", noteActions.getAllNotes);

// pobieranie konkretnej notatki
router.get("/notes/:id", noteActions.getNote);

// zapisywanie notatki
router.post("/notes", noteActions.saveNote);

// edytowanie notatki
router.put("/notes/:id", noteActions.updateNote);

// usuwanie notatki
router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
