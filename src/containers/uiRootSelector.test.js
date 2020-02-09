import { STORE_SLICE_NAME as UI_ROOT } from './constants';

import uiRootSelector from './uiRootSelector';

const state = {
  [UI_ROOT]: {
    some: 'ui state',
  },
};

describe('~/containers/uiRootSelector', () => {
  it("selects containers store's slice", () => {
    expect.assertions(1);

    expect(uiRootSelector(state)).toStrictEqual(state[UI_ROOT]);
  });
});
