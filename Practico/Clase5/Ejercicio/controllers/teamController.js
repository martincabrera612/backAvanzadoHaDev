const { default: mongoose } = require("mongoose");
const db = require("./../db");
const Team = require("./../models/Team");


/**
 *  It's an asynchronous function that finds all the teams in the database and sends them back to the
  client  */
const index = async (req,res) => {
    const teams = await Team.find();
    res.json(teams);
};

const list = async (req, res) => {
    const order = req.query.order || "asc";
    const sortBy = req.query.sortBy || "code";
    const skip = Number(req.query.skip);

    const sortCriteria = {
        [sortBy]: order,
    };

    const teams = await Team.find({}).sort(sortCriteria).skip(skip);
    res.json(teams);
};

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

};
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

const update = async (req, res)=> {
    try {
        const teamData= req.body;
        const team = await Team.findOneAndUpdate({code:  req.params.code}, teamData, {new:true, runValidators:true});
        if(team) {
            res.status(200).json(team);
        }else {
            res.status(404).json({ error: "El equipo que quiere editar no existe."});
        }
        
    }catch(error) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).json(error);
          } else {
            res.status(500).json({
              error: "Error inesperado con la base de datos.",
            });
          }
    }
};

const deleteTeam = async (req,res)=> {
    try {
        const team = await Team.findOneAndDelete({code: req.params.code});
        if (team) {
            return res.json(team);
        }else {
            return res.status(404).json({error: "El equipo que quiere eliminar no existe"});

        }
    } catch (error) {
        res.status(500).json({error: "Error inesperado en la base de datos"});
    }
};

const goalPlus = async (req, res) => {
    try {
        const team = await Team.findOneAndUpdate(
            { code: req.params.code},
            {$inc: {goals: 1} }, 
            {new: true}
            
    );
    if (!team) {
        return res.status(404).json({error: "El equipo al que intenta actualizar no existe"});
    }else {
        res.json(team);
    }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

const goalMinus = async (req, res) => {
    try {
        const team = await Team.findOneAndUpdate(
            { code: req.params.code, goals: {$gte: 1}},
            {$inc: {goals: -1} }, 
            {new: true}
            
    );
    if (!team) {
        return res.status(404).json({error: "La operacion no es valida"});
    }else {
        res.json(team);
    }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

module.exports = {
    index,
    showOne,
    store,
    list,
    update,
    deleteTeam,
    goalMinus,
    goalPlus
}