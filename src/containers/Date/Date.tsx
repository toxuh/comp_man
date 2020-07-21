import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { Date as DateComponent } from '../../components';

import { Date as DateType } from '../../types';

import useDate from './useDate';

type DateProps = {
  date: DateType;
  handleChangeDateState: Dispatch<SetStateAction<DateType>>;
};

const Date: React.FC<DateProps> = ({
  date: dateObject,
  handleChangeDateState,
}) => {
  const { date, time, updateTime } = useDate({
    dateObject,
    handleChangeDateState,
  });

  useEffect(() => {
    const ass = async () => {
      const her = await updateTime(dateObject.gameDate);

      return her;
    };

    ass().then((her2) => {
      handleChangeDateState({
        ...dateObject,
        gameDate: her2,
      });
    });
  }, [dateObject, handleChangeDateState, updateTime]);

  return <DateComponent date={date} time={time} />;
};

export default Date;
