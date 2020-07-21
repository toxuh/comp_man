import React, { useState } from 'react';

import Main from '../Main/Main';

import { AgreeScreen, Layout, WelcomeScreen } from '../../components';

import { agreedState, playerNameState } from '../../constants/initialState';

const App: React.FC = () => {
  const [isAgreed, setAgreed] = useState(agreedState);
  const [playerName, setPlayerName] = useState(playerNameState);

  return (
    <Layout>
      {!playerName && !isAgreed && (
        <WelcomeScreen handleSetPlayerName={setPlayerName} />
      )}
      {playerName && !isAgreed && <AgreeScreen handleSetAgree={setAgreed} />}
      {playerName && isAgreed && <Main />}
    </Layout>
  );
};

export default App;
