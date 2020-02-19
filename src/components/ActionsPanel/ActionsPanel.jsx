import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import './ActionsPanel.css';

const ActionsPanel = (props) => {
  const { items } = props;

  return (
    <ListGroup className="ActionsPanel">
      {items.map((item) => (
        <ListGroup.Item key={item.name} onClick={item.handleClick}>
          {item.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

ActionsPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default ActionsPanel;
