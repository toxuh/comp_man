import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import messages from './messages';

const IntroduceScreen = (props) => {
  const intl = useIntl();
  const { onPlayerNameChange } = props;

  const [playerName, changeNAme] = useState(null);

  const submitText = useMemo(() => intl.formatMessage(messages.submit), [intl]);
  const handleChange = useCallback((e) => changeNAme(e.target.value), []);

  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="name"
            placeholder={intl.formatMessage(messages.typeYourName)}
            required
            onChange={handleChange}
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
