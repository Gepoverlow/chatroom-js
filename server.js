const express = require("express");
const http = require("http");

const app = express();
const clientPath = `${__dirname}/./dist`;

app.use(express.static(clientPath));

const server = http.createServer(app);

const port = 8080;

server.listen(port, () => {
  console.log("server running on " + port);
});

const io = require("socket.io")(server);

let counter = 0;
io.on("connection", (socket) => {
  counter++;
  console.log(`Persons connected: ${counter}`);

  socket.on("sendToAll", (message) => {
    io.emit("displayMessage", message);
  });

  socket.on("sendToOwn", (message) => {
    socket.emit("displayMessage", message);
  });
});
