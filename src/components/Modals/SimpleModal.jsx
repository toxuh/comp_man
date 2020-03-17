import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import './SimpleModal.css';

const SimpleModal = (props) => {
  const { children, isShown } = props;

  if (!isShown) {
    return null;
  }

  return (
    <Container className="SimpleModal" fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

SimpleModal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

SimpleModal.defaultProps = {
  children: [],
};

export default SimpleModal;
