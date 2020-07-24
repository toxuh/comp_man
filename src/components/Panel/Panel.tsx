import React from 'react';
import { useIntl } from 'react-intl';

import messages from './messages';

import './Panel.css';

export type PanelComponent = {
  header?: string;
  fields: { name: string; value: number | string; noTranslate?: boolean }[];
};

const Panel: React.FC<PanelComponent> = ({ header, fields }) => {
  const intl = useIntl();

  return (
    <div className="Panel">
      {header && (
        <div className="Panel__header">
          {intl.formatMessage(messages[header as keyof typeof messages])}
        </div>
      )}
      {fields.map(({ name, value, noTranslate }) => (
        <p key={name} className="Panel__field">
          {`${intl.formatMessage(messages[name as keyof typeof messages])} -`}
          <span>
            {noTranslate
              ? value
              : intl.formatMessage(messages[value as keyof typeof messages])}
          </span>
        </p>
      ))}
    </div>
  );
};

export default Panel;
