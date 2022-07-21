function chatOnlineRender(parent) {
  const chatOnline = document.createElement("div");
  chatOnline.id = "container-chatonline";
  parent.appendChild(chatOnline);

  const currentRoomIndicator = document.createElement("h6");
  currentRoomIndicator.id = "current-room-indicator";
  currentRoomIndicator.textContent = "You are currently in room:";
  chatOnline.appendChild(currentRoomIndicator);

  const currentRoom = document.createElement("h6");
  currentRoom.id = "current-room";
  currentRoom.textContent = "Dummy-GENERAL";
  chatOnline.appendChild(currentRoom);

  const onlineUsersIndicator = document.createElement("h6");
  onlineUsersIndicator.id = "online-users-indicator";
  onlineUsersIndicator.textContent = "Users in this room:";
  chatOnline.appendChild(onlineUsersIndicator);

  const onlineUsersUl = document.createElement("ul");
  onlineUsersUl.id = "online-users-ul";
  chatOnline.appendChild(onlineUsersUl);
}

export { chatOnlineRender };
