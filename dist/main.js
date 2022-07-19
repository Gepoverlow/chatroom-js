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


class Chatroom {
  #user;
  constructor(username) {
    this.#user = new _User__WEBPACK_IMPORTED_MODULE_0__.User(username);
  }

  getUser() {
    return this.#user;
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
    console.log(composedMessage);
  }
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

const chatRoom = new _classes_Chatroom__WEBPACK_IMPORTED_MODULE_0__.Chatroom("gepoverlowwww");
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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map