const Team = require("./../models/Team");

const getTeams = async (req,res)=> {
    const teams = await Team.find();
    res.send(teams);

   
};

const borrarEquipo = async (req, res) => {
    const codeTeam = req.params.code;
    const team = await Team.deleteOne({ code: codeTeam });
    res.send('Se borro exitosamente ');
}


module.exports = {
    getTeams,
    borrarEquipo
};