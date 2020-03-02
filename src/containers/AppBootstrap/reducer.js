import produce from 'immer';

import * as types from './types';

export const initialState = {
  agreed: false,
  player: {
    name: null,
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
    date: 'Thu Jan 01 1998 09:00:00 GMT+0100 (Central European Standard Time)',
    counting: false,
  },
  work: {
    position: 0,
    salary: 0,
  },
  news: {
    data: '',
  },
};

export default (state = initialState, action) =>
  /* eslint-disable-next-line */
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case types.CHANGE_PLAYER_NAME: {
        draft.player = { ...draft.player, name: payload };

        break;
      }

      case types.CHANGE_AGREED: {
        draft.agreed = true;

        break;
      }

      case types.TIME_START: {
        draft.date.counting = true;

        break;
      }

      case types.TIME_STOP: {
        draft.date.counting = false;

        break;
      }

      case types.UPDATE_DATE: {
        const { date } = payload;

        draft.date = {
          ...draft.date,
          date,
        };

        break;
      }

      default: {
        return initialState;
      }
    }
  });
