require("./db");
const express = require("express");
const Team = require("./models/Team");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);


const team = new Team ({
    code: "uy",
    flag:"bandera",
    name: "Uruguay"
})

team.save().then(()=> console.log ("Se guardo en la base de datos"));

app.listen(3000, () => {
    console.log("Express UP");
});