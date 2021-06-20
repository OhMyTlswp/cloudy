import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Col from '../../components/Col/Col';
import Container from '../../components/Container/Container';
import Grid from '../../components/Grid/Grid';
import RoomCard from '../../components/RoomCard/RoomCard';

import Typography from '../../components/Typography/Typography';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';
import CreateRoomModal from '../../components/CreateRoomModal/CreateRoomModal';

// import Row from '../../components/Row/Row';
// import Input from '../../components/Input/Input';
// import Modal from '../../components/Modal/Modal';
// import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer';
// import cutString from '../../actions/cutString';
// import Avatar from '../../components/Avatar/Avatar';
// import Box from '../../components/Box/Box';

export default function Rooms() {
  const [modalIsOpen, setModalIsOpen] = useState();
  const [rooms, setRooms] = useState([]);
  // const rootNode = useRef();
  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, (res) => {
      // if (rootNode.current) {
      setRooms(res.rooms);
      // }
    });
  }, []);
  return (
    <>
      <CreateRoomModal setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
      <Container className="py-5">
        <Col>
          <Typography size="2xl" weight="bold">
            Комнаты
          </Typography>
          <Button onClick={() => setModalIsOpen(true)}>Создать</Button>
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch my-4">
            {rooms.map(({ name = '', desc = '', roomID, users = {} }) => (
              <RoomCard key={roomID} id={roomID} desc={desc} users={Object.values(users)} title={name} />
            ))}
          </Grid>
        </Col>
      </Container>
    </>
  );
}
// const rooms = [
//   {
//     id: 0,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 1,
//     title: 'Конец света 🌠',
//     desc: `Коне́ц све́та — распространённый фразеологизм, означающий реальную либо воображаемую
//      угрозу прекращения существования всех людей, цивилизаций, всего
//      человечества, Земли или даже Вселенной целиком.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Web dev 🔧🚲',
//     desc: 'Веб-разработка — процесс создания веб-сайта или веб-приложения.',
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 6,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 7,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 8,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 9,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [],
//   },
//   {
//     id: 10,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
//   {
//     id: 11,
//     title: 'Наука и техника',
//     desc: `Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных
// знаний о действительности.`,
//     users: [
//       { id: 0, name: 'John' },
//       { id: 1, name: 'Johny' },
//       { id: 2, name: 'Johns' },
//       { id: 3, name: 'Dima' },
//       { id: 4, name: 'John' },
//       { id: 5, name: 'John' },
//       { id: 6, name: 'John' },
//     ],
//   },
// ];
