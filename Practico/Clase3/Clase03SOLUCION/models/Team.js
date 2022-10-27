const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    code: String,
    name: String,
    flag: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;

//! Este codigo no deberia estar en el modelo, pero por ahora lo dejamos para cumplir con el ejercicio
async function createTeam() {
  // Se crea Uruguay:
  const team = new Team({
    code: "uy",
    name: "Uruguay",
    flag: "🇺🇾",
  });

  await team.save(); // Se guarda en la base de datos
  console.log("Se creo el equipo", team);
}

createTeam();
