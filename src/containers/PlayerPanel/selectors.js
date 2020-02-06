import { createSelector } from 'reselect';

import { STORE_SLICE_NAME } from './constants';

import uiRootSelector from '../uiRootSelector';

export const playerSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME],
);

export const moneySelector = createSelector(
  playerSelector,
  (player) => player.money,
);

export const pointsSelector = createSelector(
  playerSelector,
  (player) => player.points,
);

export const statusSelector = createSelector(
  playerSelector,
  (player) => player.status,
);

export const moodSelector = createSelector(
  playerSelector,
  (player) => player.mood,
);
