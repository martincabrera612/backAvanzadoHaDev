const mongoose = require("mongoose");
const { Schema } = mongoose;

const authorSchema = new Schema({
  // _id: {type: Schema.Types.ObjectId }
  firstname: String,
  lastname: { type: String },
  age: {
    type: Number,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
