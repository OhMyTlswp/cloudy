import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import Col from '../Col/Col';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';
import Typography from '../Typography/Typography';
import createRoom from '../../actions/createRoom';

export default function CreateRoomModal({ modalIsOpen, setModalIsOpen }) {
  const history = useHistory();
  const emojis = ['❤', '👽', '🐼', '🐸', '😎', '🤗'];
  const [value, setValue] = useState('');
  const setEmoji = (emojisItem) => setValue(value + emojisItem);
  const close = () => setModalIsOpen(false);
  const inputNameHandler = (e) => setValue(e.target.value);
  const createRoomHandler = () => {
    if (value !== '') {
      const roomID = v4();
      createRoom(roomID, value);
      history.push(`/room/${roomID}`);
    }
  };

  if (!modalIsOpen) {
    return null;
  }
  return (
    <Modal onClose={close}>
      <Col>
        <Typography size="xl" weight="bold">
          Создание комнаты
        </Typography>
        <Typography weight="bold">Название</Typography>
        <Input value={value} onChange={inputNameHandler} type="text" placeholder="Название" />
        <ResponsiveContainer animate>
          {emojis.map((emojisItem) => (
            <Button onClick={() => setEmoji(emojisItem)}>{emojisItem}</Button>
          ))}
        </ResponsiveContainer>
        <Button onClick={createRoomHandler}>Создать</Button>
      </Col>
    </Modal>
  );
}
CreateRoomModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};
