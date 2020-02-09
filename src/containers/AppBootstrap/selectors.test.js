import * as selectors from './selectors';

import { STORE_SLICE_NAME as APP_BOOTSTRAP } from '../PlayerPanel/constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [APP_BOOTSTRAP]: {
      name: 'Player name',
    },
  },
};

describe('~/containers/AppBootstrap/selectors', () => {
  describe('playerSelector', () => {
    it("selects player store's slice", () => {
      expect.assertions(1);

      expect(selectors.playerSelector(state)).toStrictEqual(
        state[ROOT][APP_BOOTSTRAP],
      );
    });
  });

  describe('playerNameSelector', () => {
    it('selects `.name`', () => {
      expect.assertions(1);

      expect(selectors.playerNameSelector(state)).toStrictEqual(
        state[ROOT][APP_BOOTSTRAP].name,
      );
    });
  });
});
