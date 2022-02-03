import * as wss from "./wss.js";
import * as ui from "./ui.js";
import * as constants from "./constants.js";

let connectedUserDetails;

export const sendPreOffer = (callType, calleePersonalCode) => {
  const data = {
    callType,
    calleePersonalCode,
  };

  wss.sendPreOffer(data);
};

export const handlerPreOffer = (data) => {
  const { callType, callerSocketId } = data;

  connectedUserDetails = {
    socketId: callerSocketId,
    callType,
  };

  console.log({ sendPreOffer: data });

  if (
    callType === constants.callType.CHAT_PERSONAL_CODE ||
    callType === constants.callType.VIDEO_PERSONAL_CODE
  ) {
    ui.showIncomingCallDialog(callType, acceptCallHandler, rejectCallHandler);
  }
};

const acceptCallHandler = () => {
  console.log("Call accepted");
};

const rejectCallHandler = () => {
  console.log("Reject accepted");
};
