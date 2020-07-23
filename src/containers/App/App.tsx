import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import Main from '../Main/Main';

import { AgreeScreen, Layout, WelcomeScreen } from '../../components';

import { agreedState, playerNameState } from '../../constants/initialState';

import messages from './messages';

const App: React.FC = () => {
  const intl = useIntl();

  const [isAgreed, setAgreed] = useState(agreedState);
  const [playerName, setPlayerName] = useState(playerNameState);

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage(messages.gameTitle, { name: playerName })}
      />
      {!playerName && !isAgreed && (
        <WelcomeScreen handleSetPlayerName={setPlayerName} />
      )}
      {playerName && !isAgreed && <AgreeScreen handleSetAgree={setAgreed} />}
      {playerName && isAgreed && <Main />}
    </Layout>
  );
};

export default App;
