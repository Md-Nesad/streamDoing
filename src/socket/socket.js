import { io } from "socket.io-client";
import { SOCKET_URL } from "../utility/utility";
console.log(SOCKET_URL);

const token = localStorage.getItem("admin_token");

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  reconnection: true,
  auth: {
    token,
  },
});
