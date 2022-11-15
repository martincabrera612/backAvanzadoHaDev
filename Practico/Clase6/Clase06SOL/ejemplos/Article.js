const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  title: String,
  published: Boolean,
  likes: Number,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
