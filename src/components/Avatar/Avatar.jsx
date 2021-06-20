import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ src, alt, className, ...props }) {
  return (
    <img
      {...props}
      className={`w-10 h-10 rounded-full box-border shadow-md duration-200 transform hover:scale-105 ${className}`}
      alt={alt}
      src={src}
    />
  );
}
Avatar.defaultProps = {
  className: '',
  alt: 'avatar',
};
Avatar.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
