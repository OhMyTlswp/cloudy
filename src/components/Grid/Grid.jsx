import React from 'react';
import PropTypes from 'prop-types';

export default function Grid({ children, className }) {
  return <div className={`grid gap-5 ${className}`}>{children}</div>;
}
Grid.defaultProps = {
  className: '',
};
Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.array]).isRequired,
};
