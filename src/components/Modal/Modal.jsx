import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import Box from '../Box/Box';

export default function Modal({ onClose, children }) {
  return (
    <Backdrop onClick={onClose}>
      <Box
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-md"
      >
        {children}
      </Box>
    </Backdrop>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
