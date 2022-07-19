import { User } from "./User";

class Chatroom {
  #user;
  constructor(username) {
    this.#user = new User(username);
  }

  getUser() {
    return this.#user;
  }
}

export { Chatroom };
