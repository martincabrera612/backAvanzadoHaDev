const db = require("./../db");
const Team = require("./../models/Team");


const index = async (req,res) => {
    const teams = await Team.find();
    res.json(teams);
}

const showOne = async (req, res) =>  {
    const teamCode = req.params.code;
    const team = await Team.findOne({code: teamCode}); 
    
    if (team) {
        res.json(team);
    }else {
        res.status(404).json({error: "El equipo no existe"});
    }

}

const store = async(req, res) => {
    const team = req.body;
    const teamInstance = new Team (team);
    await teamInstance.save();
    res.json (teamInstance);

}

module.exports = {
    index,
    showOne,
    store
}