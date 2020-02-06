import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const compSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const computerSelector = createSelector(
  compSelector,
  (comp) => comp.computer,
);

export const memorySelector = createSelector(
  compSelector,
  (comp) => comp.memory,
);

export const hddSelector = createSelector(compSelector, (comp) => comp.hdd);

export const modemSelector = createSelector(compSelector, (comp) => comp.modem);

export const cdSelector = createSelector(compSelector, (comp) => comp.cd);

export const soundSelector = createSelector(compSelector, (comp) => comp.sound);
