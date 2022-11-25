const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");
const { Schema }  = mongoose;

const teamSchema = new Schema ({
       code: { type: String, required: true, unique: true}, 
       name: { type: String, required: true, minLength: 3, maxLength: 50} ,
       flag: String
    },
    {
        timestamps: false,
    }
);
teamSchema.plugin(beautifyUnique);
const Team = mongoose.model("Team", teamSchema);

module.exports = Team;