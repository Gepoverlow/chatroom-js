import { Chatroom } from "./classes/Chatroom";

let socket = io.connect();

const containerAll = document.getElementById("container-all");

const startButton = document.getElementById("start-button");
const userNameInput = document.getElementById("username-input");

const chatRoom = new Chatroom();

startButton.addEventListener("click", () => {
  const userName = userNameInput.value;
  chatRoom.init(userName);
});

containerAll.addEventListener("click", (e) => {
  if (e.target.id === "submit-message-button") {
    let messageText = document.getElementById("message-input").value;

    let user = chatRoom.getUser();
    user.sendMessage(messageText);
  }
});

// const user = chatRoom.getUser();
// user.sendMessage("yoooowwww");
// user.sendMessage("hey mo");

// msgAllButton.addEventListener("click", () => {
//   let message = msgInput.value;
//   msgInput.value = "";
//   socket.emit("sendToAll", message);
// });

// socket.on("displayMessage", (message) => {
//   let listItem = document.createElement("li");
//   listItem.textContent = message;
//   msgContainerUl.appendChild(listItem);
// });
