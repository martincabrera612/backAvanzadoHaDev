const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  author: String,
  title: String,
  published: Boolean,
  likes: Number,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
