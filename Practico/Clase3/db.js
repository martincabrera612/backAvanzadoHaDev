const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/clase3");

mongoose.connection
.once("open", () => {
    console.log("Conexion con db establecida"); 
})
.on("error", (error) => console.log(error));


//mongoose.connection.dropDatabase(); // Borra los datos en la base de datos
