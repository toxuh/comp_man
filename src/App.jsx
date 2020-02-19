import React from 'react';

import {
  AppBootstrap,
  ComputerPanel,
  DatePanel,
  PlayerPanel,
  SoftPanel,
  WorkPanel,
} from '~/containers';
import { AppLayout } from '~/components';

import './App.css';

const App = () => {
  const playerPanel = <PlayerPanel />;
  const computerPanel = <ComputerPanel />;
  const softPanel = <SoftPanel />;
  const datePanel = <DatePanel />;
  const workPanel = <WorkPanel />;

  return (
    <div className="App">
      <AppBootstrap>
        <AppLayout
          datePanel={datePanel}
          playerPanel={playerPanel}
          computerPanel={computerPanel}
          softPanel={softPanel}
          workPanel={workPanel}
        />
      </AppBootstrap>
    </div>
  );
};

export default App;
