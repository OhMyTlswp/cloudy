import React from 'react';
import PropTypes from 'prop-types';

export default function Typography({ children, size, color, colorShade, weight, className }) {
  return <div className={`text-${size} text-${color}-${colorShade} font-${weight} ${className}`}>{children}</div>;
}
Typography.defaultProps = {
  className: '',
  size: 'base',
  weight: 'normal',
  color: 'gray',
  colorShade: 900,
};
Typography.propTypes = {
  weight: PropTypes.oneOf([
    'thin',
    'extralight',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ]),
  colorShade: PropTypes.oneOf([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  color: PropTypes.oneOf(['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
