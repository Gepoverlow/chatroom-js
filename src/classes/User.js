import { Message } from "./Message";

class User {
  #userName;
  #socket;
  #fontColor;

  constructor(userName, socket, fontColor) {
    this.#userName = userName;
    this.#socket = socket;
    this.#fontColor = fontColor;
  }

  getUserName() {
    return this.#userName;
  }

  getSocket() {
    return this.#socket;
  }

  sendMessageToGeneral(what) {
    const message = new Message(what);
    const composedMessage = `[to General-chat] ${this.#userName} said: ${message.getText()}`;
    this.#socket.emit("sendToAll", { msg: composedMessage, color: this.#fontColor });
  }

  sendMessageToPrivate(what, who) {
    const message = new Message(what);
    const composedMessage = `[to ${who.username}] ${this.#userName} said: ${message.getText()}`;
    this.#socket.emit("privateMessage", { msg: composedMessage, to: who.socketId });
  }

  logIn() {
    this.#socket.emit("newUser", {
      username: this.#userName,
      socketId: this.#socket.id,
    });
  }

  getFontColor() {
    return this.#fontColor;
  }
}

export { User };
