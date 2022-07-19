import { User } from "./User";
import { renderChatroom } from "../dom-stuff/chatRoomRender";

class Chatroom {
  #user;
  constructor() {
    this.#user = undefined;
  }

  setUser(username) {
    this.#user = new User(username);
  }

  getUser() {
    return this.#user;
  }

  init(username) {
    renderChatroom();
    this.setUser(username);
  }
}

export { Chatroom };
