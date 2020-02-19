import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  dateFullSelector,
  dateSelector,
  isCountingSelector,
  timeSelector,
} from './selectors';

import { updateDate } from '../AppBootstrap/actions';

import counter from '~/utils/Timer/timerCounter';

const useDatePanel = () => {
  const dispatch = useDispatch();

  const isCounting = useSelector(isCountingSelector);
  const dateFull = useSelector(dateFullSelector);
  const date = useSelector(dateSelector);
  const time = useSelector(timeSelector);

  const updateTime = useCallback(async () => {
    const currentDate = await counter(dateFull, isCounting);

    dispatch(updateDate(currentDate));
  }, [dateFull, dispatch, isCounting]);

  return {
    date,
    time,

    updateTime,
  };
};

export default useDatePanel;
