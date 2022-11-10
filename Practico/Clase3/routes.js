const express = require("express");
const Team = require("./models/Team");

const router = express.Router();

router.get ("/", (req,res) =>{
    res.redirect("http://localhost:3000/teams");
});
router.get("/teams", async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
})

module.exports = router;