const mongoose = require("mongoose");
const connect = () => {
    mongoose.connect("mongodb://localhost/clase04");
    mongoose.connection.dropDatabase();
};

mongoose.connection
.once("open",() => {
    console.log("Conexion con db establecida");
})
.on("error", (error) => console.log(error));

module.exports = connect;