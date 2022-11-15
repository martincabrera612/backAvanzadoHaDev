require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const dbConnection = require("./db");

const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());
dbConnection();

routes(app);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
