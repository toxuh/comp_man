import * as selectors from './selectors';

import { STORE_SLICE_NAME as COMPUTER_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [COMPUTER_PANEL]: {
      computer: 0,
      memory: 0,
      hdd: 0,
      modem: 0,
      cd: 0,
      sound: 0,
    },
  },
};

describe('~/containers/PlayerPanel/selectors', () => {
  describe('compSelector', () => {
    it("selects computer store's slice", () => {
      expect.assertions(1);

      expect(selectors.compSelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL],
      );
    });
  });

  describe('computerSelector', () => {
    it('selects `.computer`', () => {
      expect.assertions(1);

      expect(selectors.computerSelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL].computer,
      );
    });
  });

  describe('memorySelector', () => {
    it('selects `.memory`', () => {
      expect.assertions(1);

      expect(selectors.memorySelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL].memory,
      );
    });
  });

  describe('hddSelector', () => {
    it('selects `.hdd`', () => {
      expect.assertions(1);

      expect(selectors.hddSelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL].hdd,
      );
    });
  });

  describe('modemSelector', () => {
    it('selects `.modem`', () => {
      expect.assertions(1);

      expect(selectors.modemSelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL].modem,
      );
    });
  });

  describe('cdSelector', () => {
    it('selects `.cd`', () => {
      expect.assertions(1);

      expect(selectors.cdSelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL].cd,
      );
    });
  });

  describe('soundSelector', () => {
    it('selects `.sound`', () => {
      expect.assertions(1);

      expect(selectors.soundSelector(state)).toStrictEqual(
        state[ROOT][COMPUTER_PANEL].sound,
      );
    });
  });
});
