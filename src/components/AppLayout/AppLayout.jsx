import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import './AppLayout.css';

const AppLayout = (props) => {
  const { playerPanel } = props;

  return (
    <div className="App">
      <Container className="Game" fluid>
        <Row>
          <Col>{playerPanel}</Col>
          <Col>Col 2</Col>
        </Row>
      </Container>
    </div>
  );
};

AppLayout.propTypes = {
  playerPanel: PropTypes.node.isRequired,
};

export default AppLayout;
