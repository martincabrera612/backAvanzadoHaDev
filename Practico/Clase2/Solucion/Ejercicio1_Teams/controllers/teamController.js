const db = require("../db");

const index = async (req, res) => {
  res.json(db.teams);
};

const show = async (req, res) => {
  const id = req.params.id;
  const team = db.teams[id];
  if (team) {
    res.json(team);
  } else {
    res.status(404).json({ error: "Team no encontrado" });
  }
};

// Estas son dos formas mas de resolver la busqueda:

// const show = async (req, res) => {
//   const id = req.params.id;
//   for (const key in db.teams) {
//     if (key === id) {
//       return res.json(db.teams[key]);
//     }
//   }
//   return res.status(404).json({ error: "Equipo no encontrado" });
// };

// const show = async (req, res) => {
//   const id = req.params.id;
//   if (id in db.teams) {
//     return res.json(db.teams[id]);
//   } else {
//     return res.status(404).json({ error: "Equipo no encontrado" });
//   }
// };

// const show = async (req, res) => {
//   if (db.teams.hasOwnProperty(req.params.id)) {
//     res.json(db.teams[req.params.id]);
//   } else {
//     res.status(404).json({ error: "Equipo no encontrado" });
//   }
// };

const store = async (req, res) => {
  const id = req.body.id;
  if (db.teams[id]) {
    res.status(409).json({ error: "Equipo ya existe" });
  } else {
    db.teams[id] = req.body;
    res.json(db.teams[id]);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  if (db.teams[id]) {
    db.teams[id] = req.body;
    res.json(db.teams[id]);
  } else {
    res.status(404).json({ error: "Equipo no encontrado" });
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const team = db.teams[id];

  if (team) {
    delete db.teams[id];
    res.json(team);
  } else {
    res.status(404).json({ error: "Equipo no encontrado" });
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
