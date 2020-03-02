import React from 'react';
import PropTypes from 'prop-types';

import './NewsPanel.css';

const NewsPanel = (props) => {
  const { data } = props;

  return <div className="NewsPanel">{data}</div>;
};

NewsPanel.propTypes = {
  data: PropTypes.string.isRequired,
};

export default NewsPanel;
