require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./db");
const registerWebsocket = require("./socket");

const PORT = process.env.APP_PORT || 3000;

db();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(routes);

// app.listen retorna un objeto que es efectivamente el servidor
const server = app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}!`)
);

// Inicializamos el websocket en el servidor
registerWebsocket(server);
