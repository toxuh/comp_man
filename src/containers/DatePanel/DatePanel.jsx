import React, { useEffect } from 'react';

import useDatePanel from '~/containers/DatePanel/useDatePanel';

import { DatePanel as DatePanelComponent } from '~/components';

const DatePanel = () => {
  const { date, time, updateTime } = useDatePanel();

  useEffect(() => {
    updateTime();
  }, [date, time, updateTime]);

  return <DatePanelComponent date={date} time={time} />;
};

export default DatePanel;
