import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import './AppLayout.css';

const AppLayout = (props) => {
  const { computerPanel, playerPanel, softPanel } = props;

  return (
    <div className="App">
      <Container className="Game" fluid>
        <Row>
          <Col>
            {playerPanel}
            {computerPanel}
            {softPanel}
          </Col>
          <Col>Col 2</Col>
        </Row>
      </Container>
    </div>
  );
};

AppLayout.propTypes = {
  playerPanel: PropTypes.node.isRequired,
  computerPanel: PropTypes.node.isRequired,
  softPanel: PropTypes.node.isRequired,
};

export default AppLayout;
