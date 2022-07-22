import { chatMessageRender } from "./chatMessageRender";
import { chatLogoRender } from "./chatLogoRender";
import { chatOnlineRender } from "./chatOnlineRender";
import { chatBoxRender } from "./chatBoxRender";

const containerAll = document.getElementById("container-all");

function renderChatroom(username) {
  containerAll.innerHTML = "";

  const chatRoom = document.createElement("div");
  chatRoom.id = "container-chatroom";
  containerAll.appendChild(chatRoom);

  chatBoxRender(chatRoom);
  chatOnlineRender(chatRoom);
  chatMessageRender(chatRoom);
  chatLogoRender(chatRoom, username);
}

export { renderChatroom };
