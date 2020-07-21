import React, { Dispatch, SetStateAction } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { Agreed as AgreedType } from '../../types';

import './AgreeScreen.css';

type AgreeScreenProps = {
  handleSetAgree: Dispatch<SetStateAction<AgreedType>>;
};

const AgreeScreen: React.FC<AgreeScreenProps> = ({ handleSetAgree }) => {
  return (
    <Container className="AgreeScreen" fluid>
      <Row>
        <Col className="AgreeScreen__textHolder">
          <h1 className="AgreeScreen__heading">Play and enjoy!</h1>
          <p>
            Пройдя эту игру вы станете настоящим компьютерным асом. Вам
            предстоит устроится на работу, купить компьютер, устанавливать
            полезный софт, взламывать банки :), а также многое другое! Вобщем
            играйте и, конечно, выигрывайте !
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="AgreeScreen__buttonHolder">
          <Button
            className="AgreeScreen__button"
            onClick={() => handleSetAgree(true)}
          >
            Okey
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AgreeScreen;
