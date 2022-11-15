const express = require("express");
const router = express.Router();
const handlers = require("./controllers/teamController");

router.get("/teams", handlers.getTeams);
router.delete("/teams/:code", handlers.borrarEquipo);

module.exports = router;
