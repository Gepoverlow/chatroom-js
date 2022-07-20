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
  constructor() {
    this.#user = undefined;
  }

  setUser(username) {
    this.#user = new _User__WEBPACK_IMPORTED_MODULE_0__.User(username);
  }

  getUser() {
    return this.#user;
  }

  init() {
    (0,_dom_stuff_chatRoomRender__WEBPACK_IMPORTED_MODULE_1__.renderChatroom)();
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

  constructor(userName) {
    this.#userName = userName;
  }

  getUserName() {
    return this.#userName;
  }

  sendMessage(what) {
    const message = new _Message__WEBPACK_IMPORTED_MODULE_0__.Message(what);
    const composedMessage = `${this.#userName} said: ${message.getText()}`;

    const msgUl = document.getElementById("chatbox-ul");

    const messageLi = document.createElement("li");
    messageLi.textContent = composedMessage;
    msgUl.appendChild(messageLi);
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

  const chatMessageBox = document.createElement("div");
  chatMessageBox.className = "input-group";
  chatMessage.appendChild(chatMessageBox);

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

const startButton = document.getElementById("start-button");
const userNameInput = document.getElementById("username-input");

const chatRoom = new _classes_Chatroom__WEBPACK_IMPORTED_MODULE_0__.Chatroom();

startButton.addEventListener("click", () => {
  const userName = userNameInput.value;
  chatRoom.setUser(userName);
  const user = chatRoom.getUser();
  console.log(user);

  if (user.getUserName()) {
    chatRoom.init();
  }
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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map