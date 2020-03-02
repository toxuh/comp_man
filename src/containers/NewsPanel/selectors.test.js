import * as selectors from './selectors';

import { STORE_SLICE_NAME as NEWS_PANEL } from './constants';

import { STORE_SLICE_NAME as ROOT } from '../constants';

const state = {
  [ROOT]: {
    [NEWS_PANEL]: {
      data: 'Hello, this is news data',
    },
  },
};

describe('~/containers/NewsPanel/selectors', () => {
  describe('allNewsSelector', () => {
    it("selects work store's slice", () => {
      expect.assertions(1);

      expect(selectors.allNewsSelector(state)).toStrictEqual(
        state[ROOT][NEWS_PANEL],
      );
    });
  });

  describe('newsDataSelector', () => {
    it('selects `.position`', () => {
      expect.assertions(1);

      expect(selectors.newsDataSelector(state)).toStrictEqual(
        state[ROOT][NEWS_PANEL].data,
      );
    });
  });
});
