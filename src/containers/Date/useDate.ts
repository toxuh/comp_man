import { Dispatch, SetStateAction, useCallback } from 'react';

import { timerCounter } from '../../utils';

import { Date as DateType } from '../../types';

type DateProps = {
  dateObject: DateType;
  handleChangeDateState: Dispatch<SetStateAction<DateType>>;
};

type UseDateReturnType = {
  date: string;
  time: string;
  updateTime: (currentDate: string) => Promise<string>;
};

const useDate = ({
  dateObject,
  handleChangeDateState,
}: DateProps): UseDateReturnType => {
  const { gameDate, isCounting } = dateObject;

  const d = new Date(gameDate);

  const date = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  const time: string = d.getHours().toString();

  const updateTime = useCallback(
    async (currentDate: string) => {
      const newDate = await timerCounter({ gameDate: currentDate, isCounting });

      return newDate;
    },
    [isCounting],
  );

  return { date, time, updateTime };
};

export default useDate;
