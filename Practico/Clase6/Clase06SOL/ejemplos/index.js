const mongoose = require("mongoose");
const Article = require("./Article");
const Author = require("./Author");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/ejemplos");

  // const art1 = new Article({
  //   title: "Art 1",
  //   likes: 100,
  //   published: true,
  //   author: "63630ea78eef31ec9355ea71",
  // });

  // await art1.save()

  // const author1 = new Author({
  //   firstname: "mariano",
  //   lastname: "zunino",
  //   age: 31,
  // });

  // await author1.save();

  const article = await Article.findOne().populate("author");

  console.log(article);
};

main();
