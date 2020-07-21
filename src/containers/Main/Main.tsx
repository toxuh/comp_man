import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Date from '../Date/Date';
import Player from '../Player/Player';

import { dateState, userState } from '../../constants/initialState';

import './Main.css';

const Main: React.FC = () => {
  const [user, setUser] = useState(userState);
  const [date, setDate] = useState(dateState);

  return (
    <Row>
      <Col className="Main__col">
        <Player player={user} handleChangePlayerState={setUser} />
      </Col>
      <Col className="Main__col">
        <Date date={date} handleChangeDateState={setDate} />
      </Col>
    </Row>
  );
};

export default Main;
