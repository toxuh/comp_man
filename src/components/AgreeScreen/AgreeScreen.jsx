import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import messages from './messages';

import './AgreeScreen.css';

const AgreeScreen = (props) => {
  const intl = useIntl();
  const { onSubmitAgree } = props;

  const headingText = useMemo(() => intl.formatMessage(messages.heading), [
    intl,
  ]);
  const mainText = useMemo(() => intl.formatMessage(messages.mainText), [intl]);
  const submitText = useMemo(() => intl.formatMessage(messages.submit), [intl]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>{headingText}</h1>
        </Col>
      </Row>
      <Row>
        <p>{mainText}</p>
      </Row>
      <Row>
        <Button onClick={() => onSubmitAgree()}>{submitText}</Button>
      </Row>
    </Container>
  );
};

AgreeScreen.propTypes = {
  onSubmitAgree: PropTypes.func.isRequired,
};

export default AgreeScreen;
