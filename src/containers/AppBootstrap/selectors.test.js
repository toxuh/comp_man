import * as selectors from './selectors';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    agreed: false,
  },
};

describe('~/containers/AppBootstrap/selectors', () => {
  describe('gameSelector', () => {
    it("selects all game store's slice", () => {
      expect.assertions(1);

      expect(selectors.gameSelector(state)).toStrictEqual(state[ROOT]);
    });
  });

  describe('agreedSelector', () => {
    it('selects `.agreed`', () => {
      expect.assertions(1);

      expect(selectors.agreedSelector(state)).toStrictEqual(state[ROOT].agreed);
    });
  });
});
