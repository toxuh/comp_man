import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { GAME_NAME } from '../../constants';

import { PlayerName as PlayerNameType } from '../../types';

import welcomeImage from './intro.png';

import messages from './messages';

import './WelcomeScreen.css';

type WelcomeScreenProps = {
  handleSetPlayerName: Dispatch<SetStateAction<PlayerNameType>>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  handleSetPlayerName,
}) => {
  const intl = useIntl();

  const inputRef = useRef(null);
  const [name, setName] = useState<PlayerNameType>(undefined);

  return (
    <Form className="WelcomeScreen">
      <Row>
        <Col>
          <img src={welcomeImage} alt={GAME_NAME} />
        </Col>
      </Row>
      <Row>
        <Col className="WelcomeScreen__label">
          <Form.Label>{intl.formatMessage(messages.enterYourName)}</Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="WelcomeScreen__input"
            type="text"
            name="name"
            ref={inputRef}
            required
            onChange={({ target: { value } }) => setName(value)}
          />
        </Col>
      </Row>
      <Row>
        <Col className="WelcomeScreen__buttonHolder">
          <Button
            className="WelcomeScreen__button"
            onClick={() => handleSetPlayerName(name)}
          >
            {intl.formatMessage(messages.heading)}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default WelcomeScreen;
