import React from 'react';

import {
  AppLayout,
  ComputerPanel,
  DatePanel,
  PlayerPanel,
  SoftPanel,
} from '~/containers';

import './App.css';

const App = () => {
  const playerPanel = <PlayerPanel />;
  const computerPanel = <ComputerPanel />;
  const softPanel = <SoftPanel />;
  const datePanel = <DatePanel />;

  return (
    <AppLayout
      datePanel={datePanel}
      playerPanel={playerPanel}
      computerPanel={computerPanel}
      softPanel={softPanel}
    />
  );
};

export default App;
