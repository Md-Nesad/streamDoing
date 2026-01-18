import { zg } from "../zego/ZegoClient";

let currentRoomId = null;

export const useZegoVideoAdmin = () => {
  //VIEW LIVE
  const viewLive = async (stream, videoEl) => {
    const userID = "admin_" + Date.now();

    await zg.loginRoom(
      stream.zegoRoomId,
      { userID, userName: "Admin" },
      { userUpdate: true },
      { scenario: { mode: "General" } },
    );

    currentRoomId = stream.zegoRoomId;

    zg.on("roomStreamUpdate", (roomID, type, streamList) => {
      if (type === "ADD") {
        streamList.forEach((s) => {
          zg.startPlayingStream(s.streamID, videoEl);
        });
      }
    });
  };

  //MUTE HOST
  const muteHost = (hostId) => {
    zg.muteMicrophone(hostId.toString(), true);
  };

  //UNMUTE HOST
  const unmuteHost = (hostId) => {
    zg.muteMicrophone(hostId.toString(), false);
  };

  //BAN HOST
  const banHost = (roomId, hostId) => {
    zg.kickOutRoomUser(roomId, [hostId.toString()]);
  };

  //EXIT ROOM
  const exitRoom = async () => {
    if (currentRoomId) {
      await zg.logoutRoom(currentRoomId);
      currentRoomId = null;
    }
  };

  return {
    viewLive,
    muteHost,
    unmuteHost,
    banHost,
    exitRoom,
  };
};
