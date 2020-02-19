import * as selectors from './selectors';

import { STORE_SLICE_NAME as DATE_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [DATE_PANEL]: {
      date:
        'Thu Jan 01 1998 09:00:00 GMT+0100 (Central European Standard Time)',
      counting: false,
    },
  },
};

describe('~/containers/DatePanel/selectors', () => {
  describe('allDateSelector', () => {
    it("selects computer store's slice", () => {
      expect.assertions(1);

      expect(selectors.allDateSelector(state)).toStrictEqual(
        state[ROOT][DATE_PANEL],
      );
    });
  });

  describe('dateFullSelector', () => {
    it('selects `.date`', () => {
      expect.assertions(1);

      expect(selectors.dateFullSelector(state)).toStrictEqual(
        state[ROOT][DATE_PANEL].date,
      );
    });
  });

  describe('dateSelector', () => {
    it('selects `1.1.1998` from full date', () => {
      expect.assertions(1);

      expect(selectors.dateSelector(state)).toStrictEqual('1.1.1998');
    });
  });

  describe('timeSelector', () => {
    it('selects `9` from full date', () => {
      expect.assertions(1);

      const date = new Date(state[ROOT][DATE_PANEL].date);

      expect(selectors.timeSelector(state)).toStrictEqual(date.getHours());
    });
  });

  describe('isCountingSelector', () => {
    it('selects `.counting`', () => {
      expect.assertions(1);

      expect(selectors.isCountingSelector(state)).toStrictEqual(
        state[ROOT][DATE_PANEL].counting,
      );
    });
  });
});
