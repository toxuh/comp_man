import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const allDateSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const dateFullSelector = createSelector(
  allDateSelector,
  (date) => date.date,
);

export const dateSelector = createSelector(dateFullSelector, (date) => {
  const d = new Date(date);

  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
});

export const timeSelector = createSelector(dateFullSelector, (date) => {
  const d = new Date(date);

  return d.getHours();
});

export const isCountingSelector = createSelector(
  allDateSelector,
  (date) => date.counting,
);
