import reducer, { initialState } from './reducer';

import * as actions from './actions';

import { testReducer } from '~/utils';

describe('~/containers/AppBootstrap/reducer', () => {
  it('returns the initial state', () => {
    expect.assertions(1);

    const { received, expected } = testReducer({
      stateBefore: undefined,
      stateAfter: initialState,
      action: {},
      reducer,
    });

    expect(received).toStrictEqual(expected);
  });

  it('handles `CHANGE_PLAYER_NAME` action', () => {
    expect.assertions(1);

    const playerName = 'Player name';
    const action = actions.changePlayerName(playerName);

    const { received, expected } = testReducer({
      stateBefore: initialState,
      stateAfter: {
        ...initialState,
        player: {
          ...initialState.player,
          name: playerName,
        },
      },
      action,
      reducer,
    });

    expect(received).toStrictEqual(expected);
  });

  it('handles `CHANGE_AGREED` action', () => {
    expect.assertions(1);

    const action = actions.agree();

    const { received, expected } = testReducer({
      stateBefore: initialState,
      stateAfter: {
        ...initialState,
        agreed: true,
      },
      action,
      reducer,
    });

    expect(received).toStrictEqual(expected);
  });

  it('handles `TIME_START` action', () => {
    expect.assertions(1);

    const action = actions.timeStart();

    const { received, expected } = testReducer({
      stateBefore: initialState,
      stateAfter: {
        ...initialState,
        date: {
          ...initialState.date,
          counting: true,
        },
      },
      action,
      reducer,
    });

    expect(received).toStrictEqual(expected);
  });

  it('handles `TIME_STOP` action', () => {
    expect.assertions(1);

    const action = actions.timeStop();

    const { received, expected } = testReducer({
      stateBefore: initialState,
      stateAfter: {
        ...initialState,
        date: {
          ...initialState.date,
          counting: false,
        },
      },
      action,
      reducer,
    });

    expect(received).toStrictEqual(expected);
  });

  it('handles `UPDATE_DATE` action', () => {
    expect.assertions(1);

    const newDate = {
      date:
        'Thu Jan 01 1998 10:00:00 GMT+0100 (Central European Standard Time)',
    };
    const action = actions.updateDate(newDate);

    const { received, expected } = testReducer({
      stateBefore: initialState,
      stateAfter: {
        ...initialState,
        date: {
          ...initialState.date,
          date: newDate.date,
        },
      },
      action,
      reducer,
    });

    expect(received).toStrictEqual(expected);
  });
});
