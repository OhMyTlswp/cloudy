import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`bg-gray-100 p-2 ring-2 ring-gray-200 rounded-md focus:outline-none focus:ring-blue-200 ${className}`}
    />
  );
}
Input.defaultProps = {
  className: '',
};
Input.propTypes = {
  className: PropTypes.string,
};
