import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { Date as DateComponent } from '../../components';

import { Date as DateType } from '../../types';

type DateProps = {
  date: DateType;
  handleChangeDateState: Dispatch<SetStateAction<DateType>>;
};

const DateContainer: React.FC<DateProps> = ({
  date,
  handleChangeDateState,
}) => {
  const d = new Date(date);

  const fullDate = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  const time: string = d.getHours().toString();

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeDateState(
        new Date(d.setTime(d.getTime() + 60 * 60 * 1000)).toString(),
      );
    }, 1000);

    return () => clearInterval(interval);
  });

  return <DateComponent date={fullDate} time={time} />;
};

export default DateContainer;
