import { Chatroom } from "./classes/Chatroom";

let socket = io.connect();

const startButton = document.getElementById("start-button");
const userNameInput = document.getElementById("username-input");

startButton.addEventListener("click", () => {
  const userName = userNameInput.value;
  const chatRoom = new Chatroom(userName);
  console.log(chatRoom);
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
