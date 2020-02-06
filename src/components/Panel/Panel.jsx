import React from 'react';
import PropTypes from 'prop-types';

import './Panel.css';

const Panel = (props) => {
  const { header, fields } = props;

  return (
    <div className="Panel">
      {header && <div className="Panel__header">{header}</div>}
      {fields.map((field) => (
        <p className="Panel__field">
          {`${field.name} -`}
          <span>{field.value}</span>
        </p>
      ))}
    </div>
  );
};

Panel.propTypes = {
  header: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

Panel.defaultProps = {
  header: false,
  fields: [
    {
      name: '',
      value: '',
    },
  ],
};

export default Panel;
