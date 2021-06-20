import React from 'react';
import PropTypes from 'prop-types';

export default function Row({ children, className }) {
  return <div className={`grid grid-flow-col gap-4 items-center justify-start ${className}`}>{children}</div>;
}
Row.defaultProps = {
  className: '',
};
Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.array]).isRequired,
};
