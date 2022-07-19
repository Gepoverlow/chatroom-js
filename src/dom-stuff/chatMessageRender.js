function chatMessageRender(parent) {
  const chatMessage = document.createElement("div");
  chatMessage.id = "container-chatmessage";
  parent.appendChild(chatMessage);

  const chatMessageBox = document.createElement("div");
  chatMessageBox.className = "input-group";
  chatMessage.appendChild(chatMessageBox);

  const chatMessageInput = document.createElement("input");
  chatMessageInput.className = "form-control";
  chatMessageBox.appendChild(chatMessageInput);

  const chatMessageButton = document.createElement("button");
  chatMessageButton.className = "btn btn-primary";
  chatMessageButton.textContent = "Submit Message";
  chatMessageBox.appendChild(chatMessageButton);
}

export { chatMessageRender };
