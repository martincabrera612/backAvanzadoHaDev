const express = require("express");
const rutas = require("./routes");

const app = express();

// Para que nos lleguen los datos JSON tenemos que registrar el middleware de JSON
// Ver presentacion 28

app.use(express.json());
app.use(rutas);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
 