require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json()); // Para que req.body contenga los datos que llegaron a través del request.
app.use(express.static("public")); // Para que el servidor sirva los archivos estáticos de la carpeta public.

app.use(routes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
