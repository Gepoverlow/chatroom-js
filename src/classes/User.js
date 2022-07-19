import { Message } from "./Message";

class User {
  #userName;

  constructor(userName) {
    this.#userName = userName;
  }

  getUserName() {
    return this.#userName;
  }

  sendMessage(what) {
    const message = new Message(what);
    const composedMessage = `${this.#userName} said: ${message.getText()}`;

    const msgUl = document.getElementById("chatbox-ul");

    const messageLi = document.createElement("li");
    messageLi.textContent = composedMessage;
    msgUl.appendChild(messageLi);
  }
}

export { User };
