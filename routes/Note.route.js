const express = require("express");
const { NoteModel } = require("../model/NoteModel");

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
  const notes = await NoteModel.find();
  res.send(notes);
});

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  const note = new NoteModel(payload);
  await note.save();
  res.send("Note Created");
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const noteID = req.params.id;
  await NoteModel.findByIdAndDelete({ _id: noteID });
  res.send("note has been deleted with ID");
});

module.exports = {
  noteRouter,
};
