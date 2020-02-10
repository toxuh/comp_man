import * as selectors from './selectors';

import { STORE_SLICE_NAME as DATE_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [DATE_PANEL]: {
      date: '01.01.1998',
      time: 9,
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

  describe('dateSelector', () => {
    it('selects `.date`', () => {
      expect.assertions(1);

      expect(selectors.dateSelector(state)).toStrictEqual(
        state[ROOT][DATE_PANEL].date,
      );
    });
  });

  describe('timeSelector', () => {
    it('selects `.time`', () => {
      expect.assertions(1);

      expect(selectors.timeSelector(state)).toStrictEqual(
        state[ROOT][DATE_PANEL].time,
      );
    });
  });
});
