import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import messages from './messages';

import './IntroduceScreen.css';

const IntroduceScreen = (props) => {
  const intl = useIntl();
  const { onPlayerNameChange } = props;

  const [playerName, changeName] = useState(null);

  const submitText = useMemo(() => intl.formatMessage(messages.submit), [intl]);

  return (
    <Form className="IntroduceScreen">
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="name"
            placeholder={intl.formatMessage(messages.typeYourName)}
            required
            onChange={(e) => changeName(e.target.value)}
          />
        </Col>
        <Col>
          <Button onClick={() => onPlayerNameChange(playerName)}>
            {submitText}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

IntroduceScreen.propTypes = {
  onPlayerNameChange: PropTypes.func.isRequired,
};

export default IntroduceScreen;
