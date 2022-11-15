const mongoose = require("mongoose");
const Article = require("./Article");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/ejemplos");

  // await Article.create({
  //   author: "Pepe",
  //   title: "The Go programming language",
  //   published: true,
  //   likes: 50,
  // });

  // const nodeArticle = await Article.findOne({
  //   likes: {
  //     $gte: 25,
  //     $lte: 30,
  //   },
  // });

  // console.log(nodeArticle);
  // await nodeArticle.remove();

  // const amountDeleted = await Article.deleteOne({
  //   title: "The Node programming language",
  // });

  // console.log("Amount deleted:", amountDeleted);

  // const deletedArticle = await Article.findOneAndDelete({
  //   // title: "The Go programming language",
  //   likes: {
  //     $gte: 25,
  //     $lte: 30,
  //   },
  // });
  // console.log("Deleted article:", deletedArticle);

  //! UPDATE en base a una instancia

  // const popularArticle = await Article.findOne({
  //   likes: {
  //     $gte: 25,
  //   },
  // });
  // console.log(popularArticle);
  // popularArticle.author = "Martin";
  // console.log(popularArticle);
  // await popularArticle.save();

  //! UPDATE usando el modelo
  // const result = await Article.updateOne(
  //   {
  //     likes: {
  //       $gte: 25,
  //     },
  //   },
  //   {
  //     author: "Martin",
  //   }
  // );

  // console.log(result);

  //! UPDATE usando el modelo
  // const result = await Article.findOneAndUpdate(
  //   {
  //     likes: {
  //       $gte: 25,
  //     },
  //   },
  //   {
  //     author: "Pepe",
  //   }
  // );

  // console.log(result);

  //! UPDATE usando el modelo con opciones
  // const result = await Article.findOneAndUpdate(
  //   {
  //     likes: {
  //       $gte: 25,
  //     },
  //   },
  //   {
  //     author: "Martin",
  //   },
  //   {
  //     new: true,
  //   }
  // );
  // console.log(result);

  //! OPCION LEAN
  // const result = await Article.findOne({
  //   likes: {
  //     $gte: 25,
  //   },
  // }).lean();
  // result.likes = 400;
  // console.log(result);
};

main();
