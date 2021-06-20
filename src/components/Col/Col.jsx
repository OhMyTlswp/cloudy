import React from 'react';
import PropTypes from 'prop-types';

export default function Col({ children, className }) {
  return <div className={`grid grid-flow-row gap-2 ${className}`}>{children}</div>;
}
Col.defaultProps = {
  className: '',
};
Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.array]).isRequired,
};
