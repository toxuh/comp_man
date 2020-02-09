import * as types from './types';

export const updateDate = (payload) => ({
  type: types.UPDATE_DATE,
  payload,
});

export const changePlayerName = (payload) => ({
  type: types.CHANGE_PLAYER_NAME,
  payload,
});
