import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { agree, changePlayerName, timeStart } from './actions';
import { agreedSelector } from './selectors';

import { playerNameSelector } from '../PlayerPanel/selectors';

const useAppBootstrap = () => {
  const dispatch = useDispatch();

  const playerName = useSelector(playerNameSelector);
  const isAgreed = useSelector(agreedSelector);

  const handleAgreeChange = useCallback(() => {
    dispatch(agree());
  }, [dispatch]);

  const handlePlayerNameChange = useCallback(
    (payload) => {
      dispatch(changePlayerName(payload));
    },
    [dispatch],
  );

  const startTimer = useCallback(() => {
    dispatch(timeStart());
  }, [dispatch]);

  return {
    playerName,
    isAgreed,

    handleAgreeChange,
    handlePlayerNameChange,
    startTimer,
  };
};

export default useAppBootstrap;
