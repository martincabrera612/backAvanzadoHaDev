const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb://localhost/clase05");
    mongoose.connection.dropDatabase(); // CUIDADO
};

mongoose.connection
    .once("open", ()=> console.log('Conexion db establecida'))
    .on("error", (error) => console.log(error));


module.exports = connect;

