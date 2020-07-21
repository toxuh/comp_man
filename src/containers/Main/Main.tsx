import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Date from '../Date/Date';
import Player from '../Player/Player';

import { agreedState, dateState, userState } from './initialState';

import './Main.css';

const Main: React.FC = () => {
  const [isAgreed, setAgreed] = useState(agreedState);
  const [user, setUser] = useState(userState);
  const [date, setDate] = useState(dateState);

  return (
    <Row>
      <Col className="Main__col">
        <Player player={user} />
      </Col>
      <Col className="Main__col">
        <Date />
      </Col>
    </Row>
  );
};

export default Main;
