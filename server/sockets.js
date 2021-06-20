const ACTIONS = require('../src/socket/actions');
const { version, validate } = require('uuid');
const express = require('express');

module.exports = (io) => {
  let roomsData = {};
  function createRoom(data, ownerID) {
    if (data.roomID in roomsData) {
      return null;
    }
    roomsData[data.roomID] = data;
    roomsData[data.roomID].users = {};
    roomsData[data.roomID].ownerID = ownerID;
    shareRoomsInfo();
  }

  function getClientRooms() {
    let { rooms } = io.sockets.adapter;
    rooms = Array.from(rooms.keys()).filter((roomID) => validate(roomID) && version(roomID) === 4);
    rooms = rooms.map((roomsItem) => {
      let data = roomsData[roomsItem];
      if (data) {
        return { ...data };
      }
    });
    return Object.values(roomsData);
  }

  function shareRoomsInfo() {
    io.emit(ACTIONS.SHARE_ROOMS, {
      rooms: getClientRooms(),
    });
  }
  io.on('connection', (socket) => {
    shareRoomsInfo();
    socket.on(ACTIONS.SET_MUTE, ({ peerID, id, roomID, isMuted }) => {
      console.log('is ', roomsData[roomID].ownerID === socket.request.user.id, peerID);
      if (roomsData[roomID].ownerID === socket.request.user.id) {
        roomsData[roomID].users[id].isMuted = isMuted;
        const userlist = roomsData[roomID] ? Object.values(roomsData[roomID].users) : [];
        io.to(roomID).emit(ACTIONS.SET_VOLUME, { peerID, volume: isMuted ? 0 : 1 });
        socket.emit(ACTIONS.SHARE_USERS, userlist);
        io.to(roomID).emit(ACTIONS.SHARE_USERS, userlist);
        console.log(userlist);
      }
    });
    socket.on(ACTIONS.JOIN, (config) => {
      const { room: roomID } = config;
      const { rooms: joinedRooms } = socket;
      if (Array.from(joinedRooms).includes(roomID)) {
        return console.warn('Warn');
      }
      const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

      socket.emit('GET_USER', socket.request.user);
      if (socket.request.user) {
        if (roomsData[roomID].users[socket.request.user.id]) {
          return null;
        }
        roomsData[roomID].users[socket.request.user.id] = {
          ...socket.request.user,
          peerID: socket.id,
          isMuted: false,
        };
      }
      const userlist = roomsData[roomID] ? Object.values(roomsData[roomID].users) : [];
      clients.forEach((clientsItem) => {
        io.to(clientsItem).emit(ACTIONS.ADD_PEER, {
          peerID: socket.id,
          userlist,
          createOffer: false,
        });
        socket.emit(ACTIONS.ADD_PEER, {
          peerID: clientsItem,
          info: socket.request.user,
          userlist,
          createOffer: true,
        });
      });
      socket.join(roomID);
      shareRoomsInfo();
    });
    function leaveRoom() {
      const { rooms } = socket;
      Array.from(rooms).forEach((roomID) => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);
        clients.forEach((clientItem) => {
          if (roomsData[roomID] && roomsData[roomID].users && socket.request.user) {
            delete roomsData[roomID].users[socket.request.user.id];
          }
          const userlist = roomsData[roomID] ? Object.values(roomsData[roomID].users) : [];
          io.to(clientItem).emit(ACTIONS.REMOVE_PEER, {
            peerID: socket.id,
            userlist,
          });
          socket.emit(ACTIONS.REMOVE_PEER, {
            peerID: clientItem,
            userlist,
          });
        });
        socket.leave(roomID);
      });
      shareRoomsInfo();
    }

    socket.on(ACTIONS.CREATE_ROOM, (data) => createRoom(data, socket.request.user.id));
    socket.on(ACTIONS.LEAVE, leaveRoom);
    socket.on('disconnecting', leaveRoom);
    socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
      io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, { peerID: socket.id, sessionDescription });
    });
    socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
      io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, { peerID: socket.id, iceCandidate });
    });
  });
};
