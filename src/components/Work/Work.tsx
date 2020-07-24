import React from 'react';
import { useIntl } from 'react-intl';

import messages from './messages';

import './Work.css';

export type WorkProps = {
  position: string;
  salary: number;
};

const Work: React.FC<WorkProps> = ({ position, salary }) => {
  const intl = useIntl();

  return (
    <div className="Work">
      <div className="Panel__header">{intl.formatMessage(messages.header)}</div>
      <div className="Work__field">
        {intl.formatMessage(messages[position as keyof typeof messages])} /
        {salary}$
        <span className="Work__description">
          {intl.formatMessage(messages.perDay)}
        </span>
      </div>
    </div>
  );
};

export default Work;
