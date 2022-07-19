function chatBoxRender(parent) {
  const chatBox = document.createElement("div");
  chatBox.id = "container-chatbox";
  parent.appendChild(chatBox);

  const chatUl = document.createElement("ul");
  chatUl.id = "chatbox-ul";
  chatBox.appendChild(chatUl);
}

export { chatBoxRender };
