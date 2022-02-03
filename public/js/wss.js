import * as store from "./store.js";
import * as ui from "./ui.js";
import * as webRTCHandler from "./webRTCHandler.js";

let socketIO = null;

export const registerSocketEvents = (socket) => {
  socketIO = socket;

  socket.on("connect", () => {
    console.log("Successfully connected to server");
    store.setSocketId(socket.id);
    ui.updatePersonalCode(socket.id);
  });

  socket.on("pre-offer", (data) => {
    console.log("pre hahhah");
    webRTCHandler.handlerPreOffer(data);
  });
};

export const sendPreOffer = (data) => {
  socketIO.emit("pre-offer", data);
};
