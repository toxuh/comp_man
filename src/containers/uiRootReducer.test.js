import uiRootReducer from './uiRootReducer';

jest.mock('redux', () => ({
  combineReducers: (combineMap) => combineMap,
}));

describe('~/containers/uiRootReducer', () => {
  it('combines containers reducers', () => {
    expect.assertions(1);

    const entries = Object.entries(uiRootReducer);
    entries.sort((a, b) => a[0] - b[0]);

    expect(entries).toMatchInlineSnapshot(`
      Array [
        Array [
          "app",
          [Function],
        ],
      ]
    `);
  });
});
