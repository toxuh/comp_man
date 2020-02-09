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

  it('handles `UPDATE_DATE` action', () => {
    expect.assertions(1);

    const newDate = {
      date: '01.01.1998',
      time: 10,
    };
    const action = actions.updateDate(newDate);

    const { received, expected } = testReducer({
      stateBefore: initialState,
      stateAfter: {
        ...initialState,
        date: newDate,
      },
      action,
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
});
