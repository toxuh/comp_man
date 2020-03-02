import React from 'react';
import { useIntl } from 'react-intl';

import useActionsPanel from './useActionsPanel';

import messages from './messages';

import {
  ActionsPanel as ActionsPanelComponent,
  BbsModal,
  ComputerModal,
  EntertainmentModal,
  HackingModal,
  JobModal,
  SoftwareModal,
} from '~/components';

const ActionsPanel = () => {
  const intl = useIntl();
  const {
    computerModal,
    handleComputerModalOpen,
    handleComputerModalClose,
    softwareModal,
    handleSoftwareModalOpen,
    handleSoftwareModalClose,
    hackingModal,
    handleHackingModalOpen,
    handleHackingModalClose,
    bbsModal,
    handleBbsModalOpen,
    handleBbsModalClose,
    jobModal,
    handleJobModalOpen,
    handleJobModalClose,
    entertainmentModal,
    handleEntertainmentModalOpen,
    handleEntertainmentModalClose,
  } = useActionsPanel();

  const items = [
    {
      name: intl.formatMessage(messages.computer),
      handleClick: handleComputerModalOpen,
    },
    {
      name: intl.formatMessage(messages.software),
      handleClick: handleSoftwareModalOpen,
    },
    {
      name: intl.formatMessage(messages.hacking),
      handleClick: handleHackingModalOpen,
    },
    {
      name: intl.formatMessage(messages.bbs),
      handleClick: handleBbsModalOpen,
    },
    {
      name: intl.formatMessage(messages.job),
      handleClick: handleJobModalOpen,
    },
    {
      name: intl.formatMessage(messages.entertainment),
      handleClick: handleEntertainmentModalOpen,
    },
  ];

  return (
    <>
      <ComputerModal
        isShown={computerModal}
        onClose={handleComputerModalClose}
      />
      <SoftwareModal
        isShown={softwareModal}
        onClose={handleSoftwareModalClose}
      />
      <HackingModal isShown={hackingModal} onClose={handleHackingModalClose} />
      <BbsModal isShown={bbsModal} onClose={handleBbsModalClose} />
      <JobModal isShown={jobModal} onClose={handleJobModalClose} />
      <EntertainmentModal
        isShown={entertainmentModal}
        onClose={handleEntertainmentModalClose}
      />
      <ActionsPanelComponent items={items} />
    </>
  );
};

export default ActionsPanel;
