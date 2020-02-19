import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import './AppLayout.css';

const AppLayout = (props) => {
  const { computerPanel, datePanel, playerPanel, softPanel, workPanel } = props;

  return (
    <Container className="Game" fluid>
      <Row>
        <Col style={{ padding: '5px' }}>
          {playerPanel}
          {computerPanel}
          {softPanel}
        </Col>
        <Col style={{ padding: '5px' }}>
          {datePanel}
          {workPanel}
        </Col>
      </Row>
    </Container>
  );
};

AppLayout.propTypes = {
  playerPanel: PropTypes.node.isRequired,
  computerPanel: PropTypes.node.isRequired,
  softPanel: PropTypes.node.isRequired,
  datePanel: PropTypes.node.isRequired,
  workPanel: PropTypes.node.isRequired,
};

export default AppLayout;
