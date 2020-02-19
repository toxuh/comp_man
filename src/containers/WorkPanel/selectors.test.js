import * as selectors from './selectors';

import { STORE_SLICE_NAME as WORK_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [WORK_PANEL]: {
      position: 0,
      salary: 0,
    },
  },
};

describe('~/containers/WorkPanel/selectors', () => {
  describe('allWorkSelector', () => {
    it("selects work store's slice", () => {
      expect.assertions(1);

      expect(selectors.allWorkSelector(state)).toStrictEqual(
        state[ROOT][WORK_PANEL],
      );
    });
  });

  describe('positionSelector', () => {
    it('selects `.position`', () => {
      expect.assertions(1);

      expect(selectors.positionSelector(state)).toStrictEqual(
        state[ROOT][WORK_PANEL].position,
      );
    });
  });

  describe('salarySelector', () => {
    it('selects `.salary`', () => {
      expect.assertions(1);

      expect(selectors.salarySelector(state)).toStrictEqual(
        state[ROOT][WORK_PANEL].salary,
      );
    });
  });
});
