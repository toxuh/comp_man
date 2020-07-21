import {
  DEFAULT_DATE,
  DEFAULT_USER_MONEY,
  DEFAULT_USER_MOOD,
  DEFAULT_USER_NAME,
  DEFAULT_USER_POINTS,
  DEFAULT_USER_STATUS,
} from '../../constants';

export const agreedState = false;
export const userState = {
  name: DEFAULT_USER_NAME,
  money: DEFAULT_USER_MONEY,
  points: DEFAULT_USER_POINTS,
  status: DEFAULT_USER_STATUS,
  mood: DEFAULT_USER_MOOD,
};
export const dateState = {
  date: DEFAULT_DATE,
  isCounting: false,
};
