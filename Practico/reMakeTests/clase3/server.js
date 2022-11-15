require("./db");
const express = require("express");
const app = express();
const router = require("./routes");
const Team = require ("./models/Team");

app.use(express.json());
app.use(router);


const team = new Team ({
    code: "uy",
    name:"uruguay",
    flag: "BANDERA"
});



team.save().then (() => console.log("Se guardo " + team.name + " en la base de datos"));


app.listen (3000, ()=> console.log ("Se inicio el servidor"));