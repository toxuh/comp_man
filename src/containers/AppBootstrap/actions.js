import * as types from './types';

export const changePlayerName = (payload) => ({
  type: types.CHANGE_PLAYER_NAME,
  payload,
});

export const agree = () => ({
  type: types.CHANGE_AGREED,
});

export const timeStop = () => ({
  type: types.TIME_STOP,
});

export const timeStart = () => ({
  type: types.TIME_START,
});

export const updateDate = (payload) => ({
  type: types.UPDATE_DATE,
  payload,
});
