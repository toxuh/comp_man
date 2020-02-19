import * as selectors from './selectors';

import { STORE_SLICE_NAME as PLAYER_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [PLAYER_PANEL]: {
      money: 60,
      points: 0,
      status: 0,
      mood: 1,
    },
  },
};

describe('~/containers/PlayerPanel/selectors', () => {
  describe('playerSelector', () => {
    it("selects player store's slice", () => {
      expect.assertions(1);

      expect(selectors.playerSelector(state)).toStrictEqual(
        state[ROOT][PLAYER_PANEL],
      );
    });
  });

  describe('playerNameSelector', () => {
    it('selects `.name`', () => {
      expect.assertions(1);

      expect(selectors.playerNameSelector(state)).toStrictEqual(
        state[ROOT][PLAYER_PANEL].name,
      );
    });
  });

  describe('moneySelector', () => {
    it('selects `.money`', () => {
      expect.assertions(1);

      expect(selectors.moneySelector(state)).toStrictEqual(
        state[ROOT][PLAYER_PANEL].money,
      );
    });
  });

  describe('pointsSelector', () => {
    it('selects `.points`', () => {
      expect.assertions(1);

      expect(selectors.pointsSelector(state)).toStrictEqual(
        state[ROOT][PLAYER_PANEL].points,
      );
    });
  });

  describe('statusSelector', () => {
    it('selects `.status`', () => {
      expect.assertions(1);

      expect(selectors.statusSelector(state)).toStrictEqual(
        state[ROOT][PLAYER_PANEL].status,
      );
    });
  });

  describe('moodSelector', () => {
    it('selects `.mood`', () => {
      expect.assertions(1);

      expect(selectors.moodSelector(state)).toStrictEqual(
        state[ROOT][PLAYER_PANEL].mood,
      );
    });
  });
});
