import React from 'react';

import { Panel as PanelTypes } from '../../types';

import './Panel.css';

const Panel: React.FC<PanelTypes> = ({ header, fields }) => {
  return (
    <div className="Panel">
      {header && <div className="Panel__header">{header}</div>}
      {fields.map(({ name, value }) => (
        <p key={name} className="Panel__field">
          {`${name} -`}
          <span>{value}</span>
        </p>
      ))}
    </div>
  );
};

export default Panel;
