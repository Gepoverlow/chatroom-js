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

let generalChatUsers = [];

io.on("connection", (socket) => {
  socket.join("generalChat");

  socket.on("newUser", (userInfo) => {
    generalChatUsers.push(userInfo);
    io.emit("printGeneralChatUsers", generalChatUsers);
  });

  socket.on("sendToAll", (message) => {
    io.to("generalChat").emit("displayMessage", message);
  });

  socket.on("sendToOwn", (message) => {
    socket.emit("displayMessage", message);
  });

  socket.on("disconnect", () => {
    let i = generalChatUsers
      .map((x) => {
        return x.socketId;
      })
      .indexOf(socket.id);
    if (i >= 0) {
      generalChatUsers.splice(i, 1);
    }

    io.emit("generalChatUsersDc", generalChatUsers);
  });
});
