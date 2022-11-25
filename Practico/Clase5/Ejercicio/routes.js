const express = require("express");
const router = express.Router();
const controller = require("./controllers/teamController");

router.get("/teams", controller.list);
router.get("/teams/:code", controller.showOne);
router.post("/teams", controller.store); //Crea

//Agregado en ejercicio 5
    //Completo la API
router.patch("/teams/:code", controller.update); // Cambia parcialmente
router.put("/team/:code", controller.update) // Cambia completamente (Intercambia)
router.delete("/teams/:code", controller.deleteTeam);

router.patch("/teams/:code/goals", controller.goalPlus);
router.delete("/teams/:code/goals", controller.goalMinus);


module.exports = router;
