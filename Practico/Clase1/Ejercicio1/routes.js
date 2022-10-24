const express = require("express");
const path = require("path");

const handlers = require("./Controllers/pagesController");
const router = express.Router();


router.get("/",handlers.home);

router.get("/fecha", handlers.fecha);


module.exports = router;