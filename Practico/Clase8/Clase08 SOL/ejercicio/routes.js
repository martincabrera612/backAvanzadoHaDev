const express = require("express");

const router = express.Router();
const Message = require("./models/Message");

// Esto deberia tener su propio controller!!

router.get("/messages", async (req, res) => {
  const messages = await Message.find()
    .select("-_id -__v -updatedAt")
    .populate("user", "-_id username");
  res.json(messages);
});

module.exports = router;
