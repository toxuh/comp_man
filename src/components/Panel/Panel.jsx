import React from 'react';
import PropTypes from 'prop-types';

import './Panel.css';

const Panel = (props) => {
  const { header, fields } = props;

  return (
    <div className="Panel">
      {header && <div className="Panel__header">{header}</div>}
      {fields.map((field) => (
        <p key={field.name} className="Panel__field">
          {`${field.name} -`}
          <span>{field.value}</span>
        </p>
      ))}
    </div>
  );
};

Panel.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
    }),
  ).isRequired,
  header: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Panel.defaultProps = {
  header: false,
};

export default Panel;
