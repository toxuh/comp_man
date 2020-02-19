import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const allWorkSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const positionSelector = createSelector(
  allWorkSelector,
  (work) => work.position,
);

export const salarySelector = createSelector(
  allWorkSelector,
  (work) => work.salary,
);
