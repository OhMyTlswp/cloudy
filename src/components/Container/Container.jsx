import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ children, className }) {
  return <div className={`container m-auto p-2 ${className}`}>{children}</div>;
}
Container.defaultProps = {
  className: '',
};
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
