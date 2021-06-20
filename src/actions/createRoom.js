import socket from '../socket';
import ACTIONS from '../socket/actions';

export default async function createRoom(roomID, name) {
  socket.emit(ACTIONS.CREATE_ROOM, { roomID, name });
}
