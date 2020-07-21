import { Agreed, Date, Player, PlayerName } from '../types';

import {
  DEFAULT_DATE,
  DEFAULT_USER_MONEY,
  DEFAULT_USER_MOOD,
  DEFAULT_USER_NAME,
  DEFAULT_USER_POINTS,
  DEFAULT_USER_STATUS,
} from './index';

export const agreedState: Agreed = false;
export const playerNameState: PlayerName = DEFAULT_USER_NAME;
export const userState: Player = {
  money: DEFAULT_USER_MONEY,
  points: DEFAULT_USER_POINTS,
  status: DEFAULT_USER_STATUS,
  mood: DEFAULT_USER_MOOD,
};
export const dateState: Date = {
  date: DEFAULT_DATE,
  isCounting: false,
};
