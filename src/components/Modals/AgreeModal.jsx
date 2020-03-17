import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import messages from './messages';

import './AgreeModal.css';

const AgreeModal = (props) => {
  const intl = useIntl();
  const { handleAgreeChange } = props;

  const headingText = useMemo(() => intl.formatMessage(messages.heading), [
    intl,
  ]);
  const mainText = useMemo(() => intl.formatMessage(messages.mainText), [intl]);
  const submitText = useMemo(() => intl.formatMessage(messages.ok), [intl]);

  return (
    <Container className="AgreeModal" fluid>
      <Row>
        <Col className="AgreeModal__textHolder">
          <h1 className="AgreeModal__heading">{headingText}</h1>
          <p>{mainText}</p>
        </Col>
      </Row>
      <Row>
        <Col className="AgreeModal__buttonHolder">
          <Button
            className="AgreeModal__button"
            onClick={() => handleAgreeChange()}
          >
            {submitText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

AgreeModal.propTypes = {
  handleAgreeChange: PropTypes.func.isRequired,
};

export default AgreeModal;
