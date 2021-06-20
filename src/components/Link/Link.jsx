import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Link({ children, className, activeClassName, href, to, ...props }) {
  const styles = `text-black ${className}`;
  if (to) {
    return (
      <NavLink {...props} to={to} className={styles} activeClassName={`text-blue-500 font-medium ${activeClassName}`}>
        {children}
      </NavLink>
    );
  }
  return (
    <a {...props} className={styles} href={href}>
      {children}
    </a>
  );
}
Link.defaultProps = {
  activeClassName: '',
  href: '#',
  to: null,
  className: '',
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
