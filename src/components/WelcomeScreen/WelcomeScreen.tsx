import React, { Dispatch, SetStateAction } from 'react';

import { PlayerName as PlayerNameType } from '../../types';

type WelcomeScreenProps = {
  handleSetPlayerName: Dispatch<SetStateAction<PlayerNameType>>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return <p>Welcome</p>;
};

export default WelcomeScreen;
