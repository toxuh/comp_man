import React from 'react';

import { AppLayout, ComputerPanel, PlayerPanel, SoftPanel } from '~/containers';

import './App.css';

const App = () => {
  const playerPanel = <PlayerPanel />;
  const computerPanel = <ComputerPanel />;
  const softPanel = <SoftPanel />;

  return (
    <AppLayout
      playerPanel={playerPanel}
      computerPanel={computerPanel}
      softPanel={softPanel}
    />
  );
};

export default App;
