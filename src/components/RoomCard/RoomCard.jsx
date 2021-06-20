import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
// import Avatar from '../Avatar/Avatar';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Row from '../Row/Row';
import Col from '../Col/Col';
import Typography from '../Typography/Typography';
import cutString from '../../actions/cutString';
import Avatar from '../Avatar/Avatar';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';

export default function RoomCard({ id, title, desc, users }) {
  const history = useHistory();
  const toRoom = () => history.push(`/room/${id}`);
  return (
    <motion.div className="relative">
      <motion.div
        className="bg-blue-100 z-0 opacity-100 absolute w-full h-full top-0 rounded-lg box-border shadow-md"
        initial={{ rotateZ: 0, scale: 1.02 }}
        animate={{ rotateZ: -3 + Math.random() * 3 }}
      />
      <Box className="flex items-stretch max-w-3xl relative h-full">
        <Col className="w-full">
          <Row className="justify-between w-full">
            <Col>
              <Typography size="xl" weight="semibold">
                {title}
              </Typography>
              <Typography>{cutString(desc, 130)}</Typography>
              <ResponsiveContainer margin={1} animate>
                {users.map((usersItem) => (
                  <Avatar className="h-2 w-2" src={usersItem.avatar} />
                ))}
              </ResponsiveContainer>
            </Col>
            <Button onClick={toRoom}>Войти</Button>
          </Row>
        </Col>
      </Box>
    </motion.div>
  );
}
RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
