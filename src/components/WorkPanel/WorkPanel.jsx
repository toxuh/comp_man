import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './messages';

import './WorkPanel.css';

const WorkPanel = (props) => {
  const intl = useIntl();
  const { position, salary } = props;

  return (
    <div className="WorkPanel">
      <div className="Panel__header">
        {intl.formatMessage(messages.yourJob)}
      </div>
      <div className="WorkPanel__field">
        {position} /{salary}$
        <span className="WorkPanel__description">
          {intl.formatMessage(messages.perDay)}
        </span>
      </div>
    </div>
  );
};

WorkPanel.propTypes = {
  position: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  salary: PropTypes.number.isRequired,
};

export default WorkPanel;
