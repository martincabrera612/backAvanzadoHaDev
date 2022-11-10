const express = require("express");
const handler = require("./teamController");

const router = express.Router();
router.get("/", (req,res) => res.redirect ("http://localhost:3000/teams"));
router.get("/teams", handler.getAllTeams);
router.get("/teams/:id", handler.getOneTeam);
router.post("/teams", handler.createOneTeam);
router.delete("/teams/:id", handler.deleteOneTeam);
router.patch("/teams/:id", handler.updateOneTeam);

module.exports = router;
