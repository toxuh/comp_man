import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const softwareSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const osSelector = createSelector(softwareSelector, (soft) => soft.os);

export const antivirusSelector = createSelector(
  softwareSelector,
  (soft) => soft.antivirus,
);

export const programmingSelector = createSelector(
  softwareSelector,
  (soft) => soft.programming,
);

export const bbsSelector = createSelector(softwareSelector, (soft) => soft.bbs);

export const otherSelector = createSelector(
  softwareSelector,
  (soft) => soft.other,
);
