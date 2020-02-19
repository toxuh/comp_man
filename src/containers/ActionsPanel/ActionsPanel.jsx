import React from 'react';
import { useIntl } from 'react-intl';

import useActionsPanel from './useActionsPanel';

import messages from './messages';

import { ActionsPanel as ActionsPanelComponent } from '~/components';

const ActionsPanel = () => {
  const intl = useIntl();
  const {
    handleComputerClick,
    handleSoftwareClick,
    handleHackingClick,
    handleBbsClick,
    handleJobClick,
    handleEntertainmentClick,
  } = useActionsPanel();

  const items = [
    {
      name: intl.formatMessage(messages.computer),
      handleClick: handleComputerClick,
    },
    {
      name: intl.formatMessage(messages.software),
      handleClick: handleSoftwareClick,
    },
    {
      name: intl.formatMessage(messages.hacking),
      handleClick: handleHackingClick,
    },
    {
      name: intl.formatMessage(messages.bbs),
      handleClick: handleBbsClick,
    },
    {
      name: intl.formatMessage(messages.job),
      handleClick: handleJobClick,
    },
    {
      name: intl.formatMessage(messages.entertainment),
      handleClick: handleEntertainmentClick,
    },
  ];

  return <ActionsPanelComponent items={items} />;
};

export default ActionsPanel;
