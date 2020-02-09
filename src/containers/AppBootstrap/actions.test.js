import * as actions from './actions';

describe('~/containers/AppBootstrap/actions', () => {
  describe('updateDate', () => {
    it('creates `UPDATE_DATE` action', () => {
      expect.assertions(1);

      const newDate = {
        date: '01.01.1998',
        time: 10,
      };
      const action = actions.updateDate(newDate);

      expect(action).toMatchInlineSnapshot(`
        Object {
          "payload": Object {
            "date": "01.01.1998",
            "time": 10,
          },
          "type": "RESET_GAME",
        }
      `);
    });
  });
});
