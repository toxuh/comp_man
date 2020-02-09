import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from '../PlayerPanel/constants';

import uiRootSelector from '../uiRootSelector';

export const playerSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const playerNameSelector = createSelector(
  playerSelector,
  (player) => player.name,
);
