class Message {
  #text;

  constructor(text) {
    this.#text = text;
  }

  getText() {
    return this.#text;
  }
}

export { Message };
