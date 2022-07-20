import { User } from "./User";
import { renderChatroom } from "../dom-stuff/chatRoomRender";

class Chatroom {
  #user;
  constructor() {
    this.#user = undefined;
  }

  setUser(username, socket) {
    this.#user = new User(username, socket);
  }

  getUser() {
    return this.#user;
  }

  init() {
    renderChatroom();
  }
}

export { Chatroom };
