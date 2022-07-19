import { Chatroom } from "./classes/Chatroom";
let socket = io.connect();

const chatRoom = new Chatroom("gepoverlowwww");
const user = chatRoom.getUser();
user.sendMessage("yoooowwww");

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
