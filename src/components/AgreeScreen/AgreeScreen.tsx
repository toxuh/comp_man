import React, { Dispatch, SetStateAction } from 'react';

import { Agreed as AgreedType } from '../../types';

type AgreeScreenProps = {
  handleSetAgree: Dispatch<SetStateAction<AgreedType>>;
};

const AgreeScreen: React.FC<AgreeScreenProps> = () => {
  return <p>Agree</p>;
};

export default AgreeScreen;
