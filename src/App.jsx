import React from 'react';

import { AppLayout, PlayerPanel } from '~/containers';

import './App.css';

const App = () => {
  const playerPanel = <PlayerPanel />;

  return <AppLayout playerPanel={playerPanel} />;
};

export default App;
