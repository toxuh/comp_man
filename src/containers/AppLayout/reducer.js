import produce from 'immer';

import * as types from './types';

export const initialState = {
  player: {
    money: 60,
    points: 0,
    status: 0,
    mood: 1,
  },
  computer: {
    computer: 0,
    memory: 0,
    hdd: 0,
    modem: 0,
    cd: 0,
    sound: 0,
  },
  software: {
    os: 0,
    antivirus: 0,
    programming: 0,
    bbs: 0,
    other: 0,
  },
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
