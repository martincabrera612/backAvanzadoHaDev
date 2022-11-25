const mongoose = require("mongoose");
const db = require("./../db");
const {Schema} = mongoose;

const teamSchema = new Schema ({
    code: {type:String, required: true, unique:true},
    name: {type:String, required: true, minLength: 3, maxLength: 50},
    flag: String,
    goals: {type: Number, default: 0}
});

const Team = mongoose.model("Team",teamSchema);

module.exports = Team;