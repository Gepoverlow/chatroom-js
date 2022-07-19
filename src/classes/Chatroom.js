import { User } from "./User";
import { renderChatroom } from "../dom-stuff/chatRoomRender";

class Chatroom {
  #user;
  constructor(username) {
    this.#user = new User(username);
    this.init();
  }

  getUser() {
    return this.#user;
  }

  init() {
    renderChatroom();
  }
}

export { Chatroom };
