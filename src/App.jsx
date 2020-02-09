import React from 'react';

import {
  AppBootstrap,
  ComputerPanel,
  DatePanel,
  PlayerPanel,
  SoftPanel,
} from '~/containers';
import { AppLayout } from '~/components';

import './App.css';

const App = () => {
  const playerPanel = <PlayerPanel />;
  const computerPanel = <ComputerPanel />;
  const softPanel = <SoftPanel />;
  const datePanel = <DatePanel />;

  return (
    <AppBootstrap>
      <AppLayout
        datePanel={datePanel}
        playerPanel={playerPanel}
        computerPanel={computerPanel}
        softPanel={softPanel}
      />
    </AppBootstrap>
  );
};

export default App;
