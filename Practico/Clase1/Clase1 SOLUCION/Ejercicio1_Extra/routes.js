const express = require("express");
const pagesController = require("./controllers/pagesController");

const router = express.Router();

router.get("/", pagesController.home);
router.get("/fecha", pagesController.date);
router.get("/multiplicar", pagesController.multiplyForm);
router.post("/multiplicar", pagesController.multiply);

module.exports = router;
