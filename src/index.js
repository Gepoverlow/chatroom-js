import { Chatroom } from "./classes/Chatroom";

let socket = io.connect();

const containerAll = document.getElementById("container-all");
const userNameInput = document.getElementById("username-input");
const startForm = document.getElementById("start-form");

const chatRoom = new Chatroom();

startForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = userNameInput.value;
  chatRoom.setUser(userName, socket);
  const user = chatRoom.getUser();

  if (user.getUserName()) {
    chatRoom.init();
  }
});

containerAll.addEventListener("click", (e) => {
  if (e.target.id === "submit-message-button") {
    e.preventDefault();
    let messageText = document.getElementById("message-input");
    let messageTextValue = messageText.value;
    let user = chatRoom.getUser();
    if (messageTextValue) {
      user.sendMessage(messageTextValue);
      messageText.value = "";
    }
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

socket.on("displayMessage", (message) => {
  const msgUl = document.getElementById("chatbox-ul");
  const messageLi = document.createElement("li");
  messageLi.textContent = message;
  msgUl.appendChild(messageLi);
});
