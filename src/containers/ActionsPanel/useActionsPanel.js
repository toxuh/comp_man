import { useCallback, useState } from 'react';

const useActionsPanel = () => {
  const [computerModal, toggleComputerModal] = useState(false);
  const [softwareModal, toggleSoftwareModal] = useState(false);
  const [hackingModal, toggleHackingModal] = useState(false);
  const [bbsModal, toggleBbsModal] = useState(false);
  const [jobModal, toggleJobModal] = useState(false);
  const [entertainmentModal, toggleEntertainmentModal] = useState(false);

  const handleComputerModalOpen = useCallback(() => {
    toggleComputerModal(true);
  }, []);

  const handleComputerModalClose = useCallback(() => {
    toggleComputerModal(false);
  }, []);

  const handleSoftwareModalOpen = useCallback(() => {
    toggleSoftwareModal(true);
  }, []);

  const handleSoftwareModalClose = useCallback(() => {
    toggleSoftwareModal(false);
  }, []);

  const handleHackingModalOpen = useCallback(() => {
    toggleHackingModal(true);
  }, []);

  const handleHackingModalClose = useCallback(() => {
    toggleHackingModal(false);
  }, []);

  const handleBbsModalOpen = useCallback(() => {
    toggleBbsModal(true);
  }, []);

  const handleBbsModalClose = useCallback(() => {
    toggleBbsModal(false);
  }, []);

  const handleJobModalOpen = useCallback(() => {
    toggleJobModal(true);
  }, []);

  const handleJobModalClose = useCallback(() => {
    toggleJobModal(false);
  }, []);

  const handleEntertainmentModalOpen = useCallback(() => {
    toggleEntertainmentModal(true);
  }, []);

  const handleEntertainmentModalClose = useCallback(() => {
    toggleEntertainmentModal(false);
  }, []);

  return {
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
  };
};

export default useActionsPanel;
