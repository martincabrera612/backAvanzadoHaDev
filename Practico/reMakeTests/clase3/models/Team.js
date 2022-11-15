const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    code: String,
    name: String,
    flag: String
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;