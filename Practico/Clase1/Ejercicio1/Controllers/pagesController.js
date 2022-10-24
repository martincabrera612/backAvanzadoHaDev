const path = require("path");
const dateFns = require("date-fns");
const {es} = require("date-fns/locale");
const fechaFormateada = dateFns.format(
    new Date(),  "'Hoy es 'dd 'de' MMMM 'de' yyyy 'y son las' hh:mm:ss (EEEE)"
     , {locale:es});

module.exports = {
     home: (req, res) => {
        res.sendFile (path.resolve("index.html"));
    },
    fecha: (req, res) => {
        res.send(fechaFormateada);
    }
    
}