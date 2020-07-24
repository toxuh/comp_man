import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Actions from '../Actions/Actions';
import Date from '../Date/Date';
import Hardware from '../Hardware/Hardware';
import News from '../News/News';
import Player from '../Player/Player';
import Software from '../Software/Software';
import Work from '../Work/Work';

import './Main.css';

const Main: React.FC = () => {
  return (
    <Container className="Main">
      <Row>
        <Col className="Main__col">
          <Player />
          <Hardware />
          <Software />
        </Col>
        <Col className="Main__col">
          <Date />
          <Work />
          <Actions />
          <News />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
