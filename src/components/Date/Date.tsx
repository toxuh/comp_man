import React from 'react';

export type DateComponent = {
  date: string;
  time: string;
};

const Date: React.FC<DateComponent> = ({ date, time }) => {
  return (
    <p>
      <span>{date}</span>
      <span>{time}</span>
    </p>
  );
};

export default Date;
