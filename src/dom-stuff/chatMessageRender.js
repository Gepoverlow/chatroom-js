function chatMessageRender(parent) {
  const chatMessage = document.createElement("div");
  chatMessage.id = "container-chatmessage";
  parent.appendChild(chatMessage);

  const chatMessageForm = document.createElement("form");
  chatMessageForm.id = "message-form";
  chatMessageForm.className = "form-inline";
  chatMessage.appendChild(chatMessageForm);

  const chatMessageBox = document.createElement("div");
  chatMessageBox.className = "input-group";
  chatMessageForm.appendChild(chatMessageBox);

  const chatMessageInput = document.createElement("input");
  chatMessageInput.className = "form-control";
  chatMessageInput.id = "message-input";
  chatMessageBox.appendChild(chatMessageInput);

  const chatMessageButton = document.createElement("button");
  chatMessageButton.className = "btn btn-primary";
  chatMessageButton.id = "submit-message-button";
  chatMessageButton.textContent = "Submit Message";
  chatMessageBox.appendChild(chatMessageButton);
}

export { chatMessageRender };
