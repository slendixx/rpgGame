const io = require("socket.io-client"); //ES6 modules don't want to work with the socket.io client

const serverHost = "http://localhost:3000";

const socket = io(serverHost);
socket.on("hello", (message: string) => {
  console.log(message);
});
