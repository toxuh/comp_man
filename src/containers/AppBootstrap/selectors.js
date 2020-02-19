import { createSelector } from 'reselect';

import uiRootSelector from '../uiRootSelector';

export const gameSelector = createSelector(uiRootSelector, (uiRoot) => uiRoot);

export const agreedSelector = createSelector(
  gameSelector,
  (game) => game.agreed,
);
