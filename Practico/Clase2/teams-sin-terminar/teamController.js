const db = require("./db");

const getAllTeams = (req, res) => {
  res.send(db.teams);
};

const getOneTeam = (req, res) => {
  const teamId = req.params.id;
  const team = db.teams[teamId];

  if (team) {
    return res.send(team);
  } else {
    return res.status(404).send("No existe ese equipo");
  }
};

const createOneTeam = (req, res) => {
  // Tenemos que crear un team usando los datos que llegan en el req.body!
  // Que pasa si ya existe el team que queremos crear? (buscar sobre el status code 409)
 console.log ("Este es el body:" , req.body);
  const newTeam = req.body;

  const currentTeam = db.teams[newTeam.id];
  //Me fijo si ese Team ya existe
  if (currentTeam) {
    res.status (409).send ({
      error:"El team con la id " + newTeam.id + " ya existe",

    });
  }else {
    db.teams[newTeam.id] = newTeam;
    res.status(201).send(newTeam);
  }
};

const deleteOneTeam = (req, res) => {
  // Tenemos que eliminar un team usando la id que llega en el req.params!
  // Que pasa si no existe el team que queremos eliminar?

  const teamId = req.params.id;
  const team = db.teams[teamId];

  if (team) {
    delete db.teams[teamId];
    res.send("Se borro exitosamente el equipo: " + teamId);
    
  }else {
    res.status(404).send ({error: "Team no encontrado"});
  } 
  
};

const updateOneTeam = (req, res) => {
  // Tenemos que actualizar un team usando la id que llega en el req.params y los datos que llegan en el req.body!
  // Que pasa si no existe el team que queremos actualizar?

  const teamId = req.params.id;
  const newData = req.body;
  const currentTeam = db.teams[teamId];
  if (!currentTeam) {
    res.status(404).send({error: "Ese team no existe"});
  }else {

  db.teams[teamId].id =newData.id;
  db.teams[teamId].name =newData.name;
  db.teams[teamId].flag = newData.flag;
  res.send(db.teams[teamId]);
  }
  
  
};

module.exports = {
  getAllTeams,
  getOneTeam,
  createOneTeam,
  deleteOneTeam,
  updateOneTeam,
};
