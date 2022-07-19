/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let socket = io.connect();

const msgInput = document.getElementById("write-message-input");
const msgOwnButton = document.getElementById("write-own-message-button");
const msgAllButton = document.getElementById("write-all-message-button");

const msgContainerUl = document.getElementById("read-message-ul");

msgOwnButton.addEventListener("click", () => {
  let message = msgInput.value;
  msgInput.value = "";
  socket.emit("sendToOwn", message);
});

msgAllButton.addEventListener("click", () => {
  let message = msgInput.value;
  msgInput.value = "";
  socket.emit("sendToAll", message);
});

socket.on("displayMessage", (message) => {
  let listItem = document.createElement("li");
  listItem.textContent = message;
  msgContainerUl.appendChild(listItem);
});

/******/ })()
;
//# sourceMappingURL=main.js.map