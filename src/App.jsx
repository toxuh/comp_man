import React from 'react';

import {
  ActionsPanel,
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
  const actionsPanel = <ActionsPanel />;

  return (
    <div className="App">
      <AppBootstrap>
        <AppLayout
          actionsPanel={actionsPanel}
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
