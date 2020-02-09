import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { changePlayerName } from './actions';

import { IntroduceScreen as IntroduceScreenComponent } from '~/components';

const IntroduceScreen = () => {
  const dispatch = useDispatch();

  const handlePlayerNameChange = useCallback(
    (payload) => {
      dispatch(changePlayerName(payload));
    },
    [dispatch],
  );

  return (
    <IntroduceScreenComponent onPlayerNameChange={handlePlayerNameChange} />
  );
};

export default IntroduceScreen;
