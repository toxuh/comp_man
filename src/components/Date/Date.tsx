import React from 'react';

import './Date.css';

export type DateComponent = {
  date: string;
  time: string;
};

const Date: React.FC<DateComponent> = ({ date, time }) => {
  return (
    <div className="DatePanel">
      <div className="DatePanel__field Date">{date}</div>
      <div className="DatePanel__field Time">{`${time}:00`}</div>
    </div>
  );
};

export default Date;
