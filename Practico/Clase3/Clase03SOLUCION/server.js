require("dotenv").config();
const connect = require("./db");

const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.APP_PORT || 3000;

connect();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
