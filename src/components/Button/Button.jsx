import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({ to, children, pallete, color, className, ...props }) {
  const styles = `bg-${pallete}-500 hover:bg-${pallete}-600 ubuntu
  text-${color} p-2 rounded-md shadow focus:outline-none active:scale-95
    transform hover:translate-y-0.5 duration-200 max-w-sm ${className}`;
  if (to) {
    return (
      <NavLink {...props} className={styles}>
        {children}
      </NavLink>
    );
  }
  return (
    <button type="button" {...props} className={styles}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  to: null,
  pallete: 'blue',
  color: 'white',
  className: '',
};
Button.propTypes = {
  to: PropTypes.string,
  pallete: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
