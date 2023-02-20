const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
  author: String,
});

const NoteModel = mongoose.model("notepoo", noteSchema);

module.exports = {
  NoteModel,
};
