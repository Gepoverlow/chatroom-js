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
  user.logIn();
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
      user.sendMessageToGeneral(messageTextValue);
      messageText.value = "";
    }
  }
});

socket.on("displayMessage", (message) => {
  const msgUl = document.getElementById("chatbox-ul");
  const messageLi = document.createElement("li");
  messageLi.textContent = message;
  msgUl.appendChild(messageLi);
});

socket.on("printGeneralChatUsers", (generalChatUsers) => {
  console.log(generalChatUsers);
});

socket.on("generalChatUsersDc", (generalChatUsersDc) => {
  console.log(generalChatUsersDc);
});
