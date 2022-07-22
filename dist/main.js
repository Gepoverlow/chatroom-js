/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Chatroom.js":
/*!*********************************!*\
  !*** ./src/classes/Chatroom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chatroom": () => (/* binding */ Chatroom)
/* harmony export */ });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/classes/User.js");
/* harmony import */ var _dom_stuff_chatRoomRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-stuff/chatRoomRender */ "./src/dom-stuff/chatRoomRender.js");



class Chatroom {
  #user;
  #onlineUsers = [];
  #roomName;
  #isInitialized;
  constructor(name) {
    this.#user = undefined;
    this.#roomName = name;
  }

  setUser(username, socket) {
    this.#user = new _User__WEBPACK_IMPORTED_MODULE_0__.User(username, socket);
  }

  getUser() {
    return this.#user;
  }

  init() {
    (0,_dom_stuff_chatRoomRender__WEBPACK_IMPORTED_MODULE_1__.renderChatroom)();
    this.#isInitialized = true;
  }

  getIsInitialized() {
    return this.#isInitialized;
  }

  setOnlineUsers(array) {
    this.#onlineUsers = array;
  }

  getOnlineUsers() {
    return this.#onlineUsers;
  }

  getRoomName() {
    return this.#roomName;
  }
}




/***/ }),

/***/ "./src/classes/Message.js":
/*!********************************!*\
  !*** ./src/classes/Message.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
class Message {
  #text;

  constructor(text) {
    this.#text = text;
  }

  getText() {
    return this.#text;
  }
}




/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ "./src/classes/Message.js");


class User {
  #userName;
  #socket;

  constructor(userName, socket) {
    this.#userName = userName;
    this.#socket = socket;
  }

  getUserName() {
    return this.#userName;
  }

  getSocket() {
    return this.#socket;
  }

  sendMessageToGeneral(what) {
    const message = new _Message__WEBPACK_IMPORTED_MODULE_0__.Message(what);
    const composedMessage = `[to General-chat] ${this.#userName} said: ${message.getText()}`;
    this.#socket.emit("sendToAll", composedMessage);
  }

  sendMessageToPrivate(what, who) {
    const message = new _Message__WEBPACK_IMPORTED_MODULE_0__.Message(what);
    const composedMessage = `[to ${who.username}] ${this.#userName} said: ${message.getText()}`;
    this.#socket.emit("privateMessage", { msg: composedMessage, to: who.socketId });
  }

  logIn() {
    this.#socket.emit("newUser", { username: this.#userName, socketId: this.#socket.id });
  }
}




/***/ }),

/***/ "./src/dom-stuff/chatBoxRender.js":
/*!****************************************!*\
  !*** ./src/dom-stuff/chatBoxRender.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatBoxRender": () => (/* binding */ chatBoxRender)
/* harmony export */ });
function chatBoxRender(parent) {
  const chatBox = document.createElement("div");
  chatBox.id = "container-chatbox";
  parent.appendChild(chatBox);

  const chatUl = document.createElement("ul");
  chatUl.id = "chatbox-ul";
  chatBox.appendChild(chatUl);
}




/***/ }),

/***/ "./src/dom-stuff/chatLogoRender.js":
/*!*****************************************!*\
  !*** ./src/dom-stuff/chatLogoRender.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatLogoRender": () => (/* binding */ chatLogoRender)
/* harmony export */ });
function chatLogoRender(parent) {
  const chatLogo = document.createElement("div");
  chatLogo.id = "container-chatlogo";
  parent.appendChild(chatLogo);

  const logo = document.createElement("h5");
  logo.textContent = "[CHATROOM-NAME]";
  chatLogo.appendChild(logo);
}




/***/ }),

/***/ "./src/dom-stuff/chatMessageRender.js":
/*!********************************************!*\
  !*** ./src/dom-stuff/chatMessageRender.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatMessageRender": () => (/* binding */ chatMessageRender)
/* harmony export */ });
function chatMessageRender(parent) {
  const chatMessage = document.createElement("div");
  chatMessage.id = "container-chatmessage";
  parent.appendChild(chatMessage);

  const chatMessageForm = document.createElement("form");
  chatMessageForm.id = "message-form";
  chatMessageForm.className = "form-inline";
  chatMessage.appendChild(chatMessageForm);

  const chatMessageBox = document.createElement("div");
  chatMessageBox.className = "input-group";
  chatMessageForm.appendChild(chatMessageBox);

  const chatMessageInput = document.createElement("input");
  chatMessageInput.className = "form-control";
  chatMessageInput.id = "message-input";
  chatMessageBox.appendChild(chatMessageInput);

  const chatMessageButton = document.createElement("button");
  chatMessageButton.className = "btn btn-primary";
  chatMessageButton.id = "submit-message-button";
  chatMessageButton.textContent = "Submit Message";
  chatMessageBox.appendChild(chatMessageButton);
}




/***/ }),

/***/ "./src/dom-stuff/chatOnlineRender.js":
/*!*******************************************!*\
  !*** ./src/dom-stuff/chatOnlineRender.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatOnlineRender": () => (/* binding */ chatOnlineRender)
/* harmony export */ });
function chatOnlineRender(parent) {
  const chatOnline = document.createElement("div");
  chatOnline.id = "container-chatonline";
  parent.appendChild(chatOnline);

  const currentRoomIndicator = document.createElement("h6");
  currentRoomIndicator.id = "current-room-indicator";
  currentRoomIndicator.textContent = "You are currently in room:";
  chatOnline.appendChild(currentRoomIndicator);

  const currentRoom = document.createElement("h6");
  currentRoom.id = "current-room";
  currentRoom.textContent = "Dummy-GENERAL";
  chatOnline.appendChild(currentRoom);

  const onlineUsersIndicator = document.createElement("h6");
  onlineUsersIndicator.id = "online-users-indicator";
  onlineUsersIndicator.textContent = "Users in this room:";
  chatOnline.appendChild(onlineUsersIndicator);

  const onlineUsersUl = document.createElement("ul");
  onlineUsersUl.id = "online-users-ul";
  chatOnline.appendChild(onlineUsersUl);
}




/***/ }),

/***/ "./src/dom-stuff/chatRoomRender.js":
/*!*****************************************!*\
  !*** ./src/dom-stuff/chatRoomRender.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderChatroom": () => (/* binding */ renderChatroom)
/* harmony export */ });
/* harmony import */ var _chatMessageRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatMessageRender */ "./src/dom-stuff/chatMessageRender.js");
/* harmony import */ var _chatLogoRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatLogoRender */ "./src/dom-stuff/chatLogoRender.js");
/* harmony import */ var _chatOnlineRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatOnlineRender */ "./src/dom-stuff/chatOnlineRender.js");
/* harmony import */ var _chatBoxRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatBoxRender */ "./src/dom-stuff/chatBoxRender.js");





const containerAll = document.getElementById("container-all");

function renderChatroom() {
  containerAll.innerHTML = "";

  const chatRoom = document.createElement("div");
  chatRoom.id = "container-chatroom";
  containerAll.appendChild(chatRoom);

  (0,_chatBoxRender__WEBPACK_IMPORTED_MODULE_3__.chatBoxRender)(chatRoom);
  (0,_chatOnlineRender__WEBPACK_IMPORTED_MODULE_2__.chatOnlineRender)(chatRoom);
  (0,_chatMessageRender__WEBPACK_IMPORTED_MODULE_0__.chatMessageRender)(chatRoom);
  (0,_chatLogoRender__WEBPACK_IMPORTED_MODULE_1__.chatLogoRender)(chatRoom);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Chatroom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Chatroom */ "./src/classes/Chatroom.js");


let socket = io.connect();

const containerAll = document.getElementById("container-all");
const userNameInput = document.getElementById("username-input");
const startForm = document.getElementById("start-form");

const chatRoom = new _classes_Chatroom__WEBPACK_IMPORTED_MODULE_0__.Chatroom("General");

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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map