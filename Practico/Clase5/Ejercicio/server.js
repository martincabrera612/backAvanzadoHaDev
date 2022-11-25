const connect = require("./db");
const express = require("express");
const router = require("./routes");
require("./seeders/teamSeeder");
const app = express();

connect();
app.use (express.json());
app.use (router);

app.listen("3000", () => console.log ('Servidor corriendo en puerto 3000'));

