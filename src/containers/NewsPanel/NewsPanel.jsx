import React from 'react';
import { useSelector } from 'react-redux';

import { newsDataSelector } from './selectors';

import { NewsPanel as NewsPanelComponent } from '~/components';

const NewsPanel = () => {
  const data = useSelector(newsDataSelector);

  return <NewsPanelComponent data={data} />;
};

export default NewsPanel;
