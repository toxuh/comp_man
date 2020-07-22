import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Actions from '../Actions/Actions';
import Date from '../Date/Date';
import Player from '../Player/Player';

import './Main.css';

const Main: React.FC = () => {
  return (
    <Container className="Main">
      <Row>
        <Col className="Main__col">
          <Player />
        </Col>
        <Col className="Main__col">
          <Date />
          <Actions />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
