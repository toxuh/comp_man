import React from 'react';
import { ListGroup } from 'react-bootstrap';

import './Actions.css';

export type ActionsProps = {
  items: string[];
};

const Actions: React.FC<ActionsProps> = ({ items }) => {
  return (
    <ListGroup className="Actions">
      {items.map((item) => (
        <ListGroup.Item key={item}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Actions;
