const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();

app.get("/test", (req, res) => {
  res.send("OK");
});

const server = app.listen(3000, () => console.log("servidor iniciado"));

const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("alguien trato de hablar conmigo");
  socket.on("new-message", (msg) => {
    io.emit("new-message", msg);
  });
  socket.on("disconnect", () => {
    console.log("El cliente: " + socket.id + " se desconecto");
  });
});
