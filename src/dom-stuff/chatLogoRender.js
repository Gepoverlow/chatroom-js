function chatLogoRender(parent) {
  const chatLogo = document.createElement("div");
  chatLogo.id = "container-chatlogo";
  parent.appendChild(chatLogo);

  const logo = document.createElement("h5");
  logo.textContent = "[CHATROOM-NAME]";
  chatLogo.appendChild(logo);
}

export { chatLogoRender };
