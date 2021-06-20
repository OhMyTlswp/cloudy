import React from 'react';
import PropTypes from 'prop-types';

export default function Backdrop({ children, ...props }) {
  return (
    <div
      {...props}
      className={`backdrop-filter bg-gray-900 bg-opacity-20 blur-sm z-40
      fixed top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      {children}
    </div>
  );
}

Backdrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
