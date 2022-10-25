const express = require("express");
const Team = require("./models/Team");

const router = express.Router();

router.get("/teams", async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
})

module.exports = router;