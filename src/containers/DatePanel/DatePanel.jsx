import React from 'react';
import { useSelector } from 'react-redux';

import { dateSelector, timeSelector } from './selectors';

import { DatePanel as DatePanelComponent } from '~/components';

const DatePanel = () => {
  const date = useSelector(dateSelector);
  const time = useSelector(timeSelector);

  return <DatePanelComponent date={date} time={time} />;
};

export default DatePanel;
