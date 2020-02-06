import produce from 'immer';

import * as types from './types';

export const initialState = {
  player: {
    money: 60,
    points: 0,
    status: 0,
    mood: 1,
  },
  computer: {},
  soft: {},
  date: {
    date: '01.01.1998',
    time: '9:00',
  },
  work: {},
};

export default (state = initialState, action) =>
  /* eslint-disable-next-line */
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case types.UPDATE_DATE: {
        draft.currentDate = payload.date;

        break;
      }

      default: {
        return initialState;
      }
    }
  });
