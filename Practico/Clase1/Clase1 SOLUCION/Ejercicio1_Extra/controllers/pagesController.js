const { format: dateFormat } = require("date-fns");
const { es } = require("date-fns/locale");

const home = (req, res) => {
  res.sendFile("home.html", { root: "./views" });
};

const date = (req, res) => {
  const now = new Date();

  const formatedDate = dateFormat(
    now,
    "'Hoy es' dd 'de' MMMM 'de' yyyy 'y son las' HH:mm:ss (EEEE)",
    { locale: es }
  );

  res.send(formatedDate);
};

const multiplyForm = (req, res) => {
  // O especificamos el path completo o usamos el root para indicar la carpeta base
  res.sendFile("multiply.html", { root: "./views" });
};

const multiply = (req, res) => {
  const { num1, num2 } = req.body;
  res.send("El resultado es: " + num1 * num2);
};

module.exports = {
  home,
  date,
  multiplyForm,
  multiply,
};
