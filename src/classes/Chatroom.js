import { User } from "./User";
import { renderChatroom } from "../dom-stuff/chatRoomRender";

class Chatroom {
  #user;
  #onlineUsers = [];
  #roomName;
  #isInitialized;
  constructor(name) {
    this.#user = undefined;
    this.#roomName = name;
  }

  setUser(username, socket, fontColor) {
    this.#user = new User(username, socket, fontColor);
  }

  getUser() {
    return this.#user;
  }

  init() {
    renderChatroom(this.#user.getUserName());
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

export { Chatroom };
