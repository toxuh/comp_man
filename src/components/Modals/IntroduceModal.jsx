import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import messages from './messages';

import './IntroduceModal.css';

const IntroduceModal = (props) => {
  const intl = useIntl();
  const { handlePlayerNameChange } = props;

  const [playerName, changeName] = useState(null);

  const submitText = useMemo(() => intl.formatMessage(messages.submit), [intl]);
  const inputText = useMemo(() => intl.formatMessage(messages.typeYourName), [
    intl,
  ]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form className="IntroduceModal">
      <Row>
        <Col>
          <img src="assets/intro.png" alt="Intro" />
        </Col>
      </Row>
      <Row>
        <Col className="IntroduceModal__label">
          <Form.Label>{inputText}</Form.Label>
        </Col>
        <Col>
          <Form.Control
            ref={inputRef}
            className="IntroduceModal__input"
            type="text"
            name="name"
            required
            onChange={(e) => changeName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col className="IntroduceModal__buttonHolder">
          <Button
            className="IntroduceModal__button"
            onClick={() => handlePlayerNameChange(playerName)}
          >
            {submitText}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

IntroduceModal.propTypes = {
  handlePlayerNameChange: PropTypes.func.isRequired,
};

export default IntroduceModal;
