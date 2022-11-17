const express = require("express");
const router = express.Router();
const teamController = require("./controllers/teamController");

router.get("/teams", teamController.index);
router.get("/teams/:code", teamController.showOne);
router.post("/teams", teamController.store);



module.exports = router;