const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/clase03");



mongoose.connection
    .once ("open", () => {
        console.log("Conexion con la db establecida");
    })
    .on ("error", (error) => console.log(error));

//mongoose.connection.dropDatabase(); Con esta linea borro la base de datos al reiniciar el servidor