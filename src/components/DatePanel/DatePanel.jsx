import React from 'react';
import PropTypes from 'prop-types';

import './DatePanel.css';

const DatePanel = (props) => {
  const { date, time } = props;

  return (
    <div className="DatePanel">
      <div className="DatePanel__field Date">{date}</div>
      <div className="DatePanel__field Time">{`${time}:00`}</div>
    </div>
  );
};

DatePanel.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default DatePanel;
