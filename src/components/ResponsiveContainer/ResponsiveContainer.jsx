import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useFlatChildren from '../../hooks/useFlatChildren';

const Wrapper = ({ children, className, ...props }) => (
  <div {...props} className={`flex flex-wrap justify-start items-center ${className}`}>
    {children}
  </div>
);

Wrapper.defaultProps = {
  className: '',
};
Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.array]).isRequired,
};

export default function ResponsiveContainer({ children, animate, ...props }) {
  const items = useFlatChildren(children);
  if (!Array.isArray(children)) {
    if (!animate) {
      return <Wrapper {...props}>{children}</Wrapper>;
    }
    return (
      <Wrapper {...props}>
        <motion.div
          transition={{ delay: 0 }}
          initial={{
            y: 15,
            scale: 0.9,
            opacity: 0,
          }}
          className="m-3"
          animate={{ y: 0, scale: 1, opacity: 1 }}
        >
          {items}
        </motion.div>
      </Wrapper>
    );
  }
  if (!animate) {
    return (
      <Wrapper {...props}>
        {items.map((childrenItem, index) => (
          <div key={index} className="m-3">
            {childrenItem}
          </div>
        ))}
      </Wrapper>
    );
  }
  return (
    <Wrapper {...props}>
      {items.map((childrenItem, index) => (
        <motion.div
          key={index}
          transition={{ delay: 0.1 * index }}
          initial={{
            y: 15,
            scale: 0.9,
            opacity: 0,
          }}
          className="m-3"
          animate={{ y: 0, scale: 1, opacity: 1 }}
        >
          {childrenItem}
        </motion.div>
      ))}
    </Wrapper>
  );
}
ResponsiveContainer.defaultProps = {
  animate: false,
};
ResponsiveContainer.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.array]).isRequired,
};
