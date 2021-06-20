import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import Row from '../Row/Row';
import Container from '../Container/Container';
import Avatar from '../Avatar/Avatar';

export default function Header({ className }) {
  return (
    <div className={`bg-gray-50 w-full p-3 box-border shadow-sm ${className}`}>
      <Container>
        <Row className="justify-center gap-10">
          <Row>
            <Link to="/rooms">Комнаты</Link>
          </Row>
          <Avatar src="https://picsum.photos/200/300" />
        </Row>
      </Container>
    </div>
  );
}
Header.defaultProps = {
  className: '',
};
Header.propTypes = {
  className: PropTypes.string,
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};
