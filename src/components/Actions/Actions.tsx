import React from 'react';
import { useIntl } from 'react-intl';
import { ListGroup } from 'react-bootstrap';

import messages from './messages';

import './Actions.css';

export type ActionsProps = {
  items: string[];
};

const Actions: React.FC<ActionsProps> = ({ items }) => {
  const intl = useIntl();

  return (
    <ListGroup className="Actions">
      {items.map((item) => (
        <ListGroup.Item key={item}>
          {intl.formatMessage(messages[item])}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Actions;
