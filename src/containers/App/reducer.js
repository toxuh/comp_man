import produce from 'immer';

import * as types from './types';

export const initialState = {
  currentDate: '01.01.1998',
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
