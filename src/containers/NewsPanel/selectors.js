import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const allNewsSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const newsDataSelector = createSelector(
  allNewsSelector,
  (news) => news.data,
);
