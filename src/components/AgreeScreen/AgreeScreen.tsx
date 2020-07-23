import React, { Dispatch, SetStateAction } from 'react';
import { useIntl } from 'react-intl';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { Agreed as AgreedType } from '../../types';

import messages from './messages';

import './AgreeScreen.css';

type AgreeScreenProps = {
  handleSetAgree: Dispatch<SetStateAction<AgreedType>>;
};

const AgreeScreen: React.FC<AgreeScreenProps> = ({ handleSetAgree }) => {
  const intl = useIntl();

  return (
    <Container className="AgreeScreen" fluid>
      <Row>
        <Col className="AgreeScreen__textHolder">
          <h1 className="AgreeScreen__heading">
            {intl.formatMessage(messages.heading)}
          </h1>
          <p>{intl.formatMessage(messages.message)}</p>
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
