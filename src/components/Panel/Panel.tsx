import React from 'react';

import './Panel.css';

export type PanelComponent = {
  header?: string;
  fields: { name: string; value: number | string }[];
};

const Panel: React.FC<PanelComponent> = ({ header, fields }) => {
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
