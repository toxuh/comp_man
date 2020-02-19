import { useCallback } from 'react';

const useActionsPanel = () => {
  const handleComputerClick = useCallback(() => {
    alert('Computer clicked!');
  }, []);

  const handleSoftwareClick = useCallback(() => {
    alert('Software clicked!');
  }, []);

  const handleHackingClick = useCallback(() => {
    alert('Hacking clicked!');
  }, []);

  const handleBbsClick = useCallback(() => {
    alert('BBS clicked!');
  }, []);

  const handleJobClick = useCallback(() => {
    alert('Job clicked!');
  }, []);

  const handleEntertainmentClick = useCallback(() => {
    alert('Entertainment clicked!');
  }, []);

  return {
    handleComputerClick,
    handleSoftwareClick,
    handleHackingClick,
    handleBbsClick,
    handleJobClick,
    handleEntertainmentClick,
  };
};

export default useActionsPanel;
