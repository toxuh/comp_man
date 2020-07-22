import React, { useEffect, useState } from 'react';

import { HOUR_DURATION } from '../../constants';
import { dateState } from '../../constants/initialState';

import { Date as DateComponent } from '../../components';

const DateContainer: React.FC = () => {
  const [date, setDate] = useState(dateState);

  const d = new Date(date);

  const fullDate = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  const time: string = d.getHours().toString();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date(d.setTime(d.getTime() + 60 * 60 * 1000)).toString());
    }, HOUR_DURATION);

    return () => clearInterval(interval);
  });

  return <DateComponent date={fullDate} time={time} />;
};

export default DateContainer;
