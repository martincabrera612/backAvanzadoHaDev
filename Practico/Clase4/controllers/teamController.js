/* Exporting the functions. */
const { default: mongoose } = require("mongoose");
const db = require("./../db");
const Team = require("./../models/Team");


/**
 *  It's an asynchronous function that finds all the teams in the database and sends them back to the
  client  */
const index = async (req,res) => {
    const teams = await Team.find();
    res.json(teams);
}

const list = async (req, res) => {
    const order = req.query.order || "asc";
    const sortBy = req.query.sortBy || "code";
    const skip = Number(req.query.skip);

    const sortCriteria = {
        [sortBy]: order,
    };

    const teams = await Team.find({}).sort(sortCriteria).skip(skip);
    res.json(teams);
}

/**
 * If the query string includes an include or exclude parameter, then select the fields to be included
 * or excluded from the query.
 */
const showOne = async (req, res) =>  {
    if (req.query.include && req.query.exclude){

    }
    
    let select = "";
    if (req.query.include) {
        select = req.query.include;
    }
    if (req.query.exclude) {
        if(Array.isArray(req.query.exclude)) {
            select = req.query.exclude.map((field) => `- ${field}`);
        }else {
            select = `-${req.query.exclude}`;
        }
    }

    const teamCode = req.params.code;
    const team = await Team.findOne({code: teamCode}).select(select); 
    
    /* Checking if the team exists. */
  
    if (team) {
        res.json(team);
    }else {
        res.status(404).json({error: "El equipo no existe"});
    }

}
// It creates a new team in the database
const store = async(req, res) => {
    try{
        const team = req.body;
        const newTeam = await Team.create(team);
        return res.status(201).json (newTeam);
    }catch (error){ 
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json(error);
        }else {
            return res.status(500).json ({ error: "Ocurrio un error al guardar el equipo"});
        }

    }
};

module.exports = {
    index,
    showOne,
    store,
    list
}