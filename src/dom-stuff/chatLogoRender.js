function chatLogoRender(parent, username) {
  const chatLogo = document.createElement("div");
  chatLogo.id = "container-chatlogo";
  parent.appendChild(chatLogo);

  const logo = document.createElement("h5");
  logo.textContent = `[USER]:`;
  chatLogo.appendChild(logo);

  const userSpan = document.createElement("span");
  userSpan.textContent = `${username}`;
  chatLogo.appendChild(userSpan);
}

export { chatLogoRender };
