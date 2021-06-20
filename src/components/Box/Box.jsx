import React from 'react';
import PropTypes from 'prop-types';

export default function Box({ children, className, ...props }) {
  return (
    <div {...props} className={`bg-gray-100 rounded-lg p-3 box-border shadow-md ${className}`}>
      {children}
    </div>
  );
}
Box.defaultProps = {
  className: '',
};
Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
