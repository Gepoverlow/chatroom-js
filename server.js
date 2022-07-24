const express = require("express");
const http = require("http");

const app = express();
const clientPath = `${__dirname}/./dist`;

app.use(express.static(clientPath));

const server = http.createServer(app);

const port = process.env.PORT || 8080;

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
    socket.broadcast.emit("loggedIn", userInfo.username);
  });

  socket.on("sendToAll", (data) => {
    io.to("generalChat").emit("displayMessage", data);
  });

  socket.on("privateMessage", (data) => {
    io.to(data.to).emit("private", data);
    socket.emit("private", data);
  });

  socket.on("disconnect", () => {
    let disconnectedUser;

    let i = generalChatUsers
      .map((x) => {
        return x.socketId;
      })
      .indexOf(socket.id);
    if (i >= 0) {
      disconnectedUser = generalChatUsers[i];
      generalChatUsers.splice(i, 1);
    }

    io.emit("generalChatUsersDc", generalChatUsers);
    socket.broadcast.emit("loggedOut", disconnectedUser);
  });
});
