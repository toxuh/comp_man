import * as selectors from './selectors';

import { STORE_SLICE_NAME as SOFTWARE_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [SOFTWARE_PANEL]: {
      os: 0,
      antivirus: 0,
      programming: 0,
      bbs: 0,
      other: 0,
    },
  },
};

describe('~/containers/SoftPanel/selectors', () => {
  describe('softwareSelector', () => {
    it("selects software store's slice", () => {
      expect.assertions(1);

      expect(selectors.softwareSelector(state)).toStrictEqual(
        state[ROOT][SOFTWARE_PANEL],
      );
    });
  });

  describe('osSelector', () => {
    it('selects `.os`', () => {
      expect.assertions(1);

      expect(selectors.osSelector(state)).toStrictEqual(
        state[ROOT][SOFTWARE_PANEL].os,
      );
    });
  });

  describe('antivirusSelector', () => {
    it('selects `.antivirus`', () => {
      expect.assertions(1);

      expect(selectors.antivirusSelector(state)).toStrictEqual(
        state[ROOT][SOFTWARE_PANEL].antivirus,
      );
    });
  });

  describe('programmingSelector', () => {
    it('selects `.programming`', () => {
      expect.assertions(1);

      expect(selectors.programmingSelector(state)).toStrictEqual(
        state[ROOT][SOFTWARE_PANEL].programming,
      );
    });
  });

  describe('bbsSelector', () => {
    it('selects `.bbs`', () => {
      expect.assertions(1);

      expect(selectors.bbsSelector(state)).toStrictEqual(
        state[ROOT][SOFTWARE_PANEL].bbs,
      );
    });
  });

  describe('otherSelector', () => {
    it('selects `.other`', () => {
      expect.assertions(1);

      expect(selectors.otherSelector(state)).toStrictEqual(
        state[ROOT][SOFTWARE_PANEL].other,
      );
    });
  });
});
