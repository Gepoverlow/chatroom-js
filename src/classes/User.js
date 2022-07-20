import { Message } from "./Message";

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
    const message = new Message(what);
    const composedMessage = `${this.#userName} said: ${message.getText()}`;
    this.#socket.emit("sendToAll", composedMessage);
  }

  logIn() {
    this.#socket.emit("newUser", this.#socket.id);
  }
}

export { User };
