import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const allDateSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const dateSelector = createSelector(
  allDateSelector,
  (date) => date.date,
);

export const timeSelector = createSelector(
  allDateSelector,
  (date) => date.time,
);

export const isCountingSelector = createSelector(
  allDateSelector,
  (date) => date.counting,
);
