import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { timeStart } from './actions';
import { agreedSelector } from './selectors';

import { playerNameSelector } from '../PlayerPanel/selectors';

const useAppBootstrap = () => {
  const dispatch = useDispatch();

  const playerName = useSelector(playerNameSelector);
  const isAgreed = useSelector(agreedSelector);

  const startTimer = useCallback(() => {
    dispatch(timeStart());
  }, [dispatch]);

  return {
    playerName,
    isAgreed,

    startTimer,
  };
};

export default useAppBootstrap;
