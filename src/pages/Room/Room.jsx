import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { bubbleClickSound } from '../../actions/sounds';
import Avatar from '../../components/Avatar/Avatar';
// import cutString from '../../actions/cutString';
// import Box from '../../components/Box/Box';
// import Button from '../../components/Button/Button';
import Col from '../../components/Col/Col';
import Container from '../../components/Container/Container';
import Grid from '../../components/Grid/Grid';
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer';
// import Row from '../../components/Row/Row';
import Typography from '../../components/Typography/Typography';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';

export default function Room() {
  const { id: roomID } = useParams();
  const { clients, provideMediaRef, users } = useWebRTC(roomID);
  const [title, setTitle] = useState();
  useEffect(async () => {
    fetch(`http://localhost:3001/api/get?id=${roomID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data.name);
      });
  }, []);
  return (
    <Container className="py-5">
      <Grid>
        <Col className="w-full">
          <Typography size="2xl" weight="bold">
            {title}
          </Typography>
          <Typography size="2xl" weight="bold">
            Участники
          </Typography>
          <ResponsiveContainer animate>
            {clients.map((clientID) => (
              <div key={clientID}>
                <video
                  className="rounded-md h-48 bg-blue-200 transition-all"
                  autoPlay
                  playsInline
                  muted={clientID === LOCAL_VIDEO}
                  style={{ display: 'none' }}
                  ref={(instance) => {
                    provideMediaRef(clientID, instance);
                  }}
                />
              </div>
            ))}
            {users.map(({ id, avatar, name, peerID, isMuted }) => (
              <div
                className={
                  isMuted ? 'p-1 rounded-full border-2 border-red-500' : 'p-1 rounded-full border-2 border-green-500'
                }
              >
                <Avatar
                  key={id}
                  alt={name}
                  src={avatar}
                  onClick={() => {
                    bubbleClickSound();
                    socket.emit(ACTIONS.SET_MUTE, { peerID, roomID, id, isMuted: !isMuted });
                  }}
                />
                {/* // <Button key={usersItem.id}>{usersItem.name}</Button> */}
              </div>
            ))}
          </ResponsiveContainer>
        </Col>
      </Grid>
    </Container>
  );
}
