import { Chatroom } from "./classes/Chatroom";

let socket = io.connect();

const containerAll = document.getElementById("container-all");
const userNameInput = document.getElementById("username-input");
const startForm = document.getElementById("start-form");

const chatRoom = new Chatroom("General");

startForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = userNameInput.value;

  chatRoom.setUser(userName, socket);
  const user = chatRoom.getUser();
  if (user.getUserName()) {
    chatRoom.init();
    user.logIn();
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
  if (chatRoom.getIsInitialized()) {
    const msgUl = document.getElementById("chatbox-ul");
    const messageLi = document.createElement("li");
    messageLi.textContent = message;
    msgUl.appendChild(messageLi);
  }
});

socket.on("printGeneralChatUsers", (generalChatUsers) => {
  chatRoom.setOnlineUsers(generalChatUsers);
  if (chatRoom.getIsInitialized()) {
    const onlineUsersUl = document.getElementById("online-users-ul");
    const onlineUsers = chatRoom.getOnlineUsers();

    onlineUsersUl.innerHTML = ""; //TODO:CHANGE THIS

    onlineUsers.forEach((user) => {
      let userNameLi = document.createElement("li");
      userNameLi.id = "online-user-li";
      userNameLi.textContent = user.username;
      onlineUsersUl.appendChild(userNameLi);

      userNameLi.addEventListener("click", () => {
        const ownUser = chatRoom.getUser();

        let messageText = document.getElementById("message-input");
        let messageTextValue = messageText.value;

        if (messageTextValue) {
          ownUser.sendMessageToPrivate(messageTextValue, user);
          messageText.value = "";
        }
      });
    });
  }
});

socket.on("generalChatUsersDc", (generalChatUsersDc) => {
  chatRoom.setOnlineUsers(generalChatUsersDc);
  if (chatRoom.getIsInitialized()) {
    const onlineUsersUl = document.getElementById("online-users-ul");
    const onlineUsers = chatRoom.getOnlineUsers();

    onlineUsersUl.innerHTML = ""; //TODO:CHANGE THIS

    onlineUsers.forEach((user) => {
      let userNameLi = document.createElement("li");
      userNameLi.id = "online-user-li";
      userNameLi.textContent = user.username;
      onlineUsersUl.appendChild(userNameLi);

      userNameLi.addEventListener("click", () => {
        console.log(user.userName);
      });
    });
  }
});

socket.on("private", (message) => {
  if (chatRoom.getIsInitialized()) {
    const msgUl = document.getElementById("chatbox-ul");
    const messageLi = document.createElement("li");
    messageLi.textContent = message;
    msgUl.appendChild(messageLi);
  }
});
