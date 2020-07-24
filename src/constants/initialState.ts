import {
  Agreed,
  Date,
  Hardware,
  Player,
  PlayerName,
  Software,
  Work,
} from '../types';

import {
  DEFAULT_DATE,
  DEFAULT_HARDWARE_CD,
  DEFAULT_HARDWARE_COMPUTER,
  DEFAULT_HARDWARE_DISK,
  DEFAULT_HARDWARE_MEMORY,
  DEFAULT_HARDWARE_MODEM,
  DEFAULT_HARDWARE_SOUND,
  DEFAULT_SOFTWARE_ANTIVIRUS,
  DEFAULT_SOFTWARE_BBS,
  DEFAULT_SOFTWARE_OS,
  DEFAULT_SOFTWARE_OTHER,
  DEFAULT_SOFTWARE_PROGRAMMING,
  DEFAULT_USER_MONEY,
  DEFAULT_USER_MOOD,
  DEFAULT_USER_NAME,
  DEFAULT_USER_POINTS,
  DEFAULT_USER_STATUS,
  DEFAULT_WORK_POSITION,
  DEFAULT_WORK_SALARY,
} from './index';

export const agreedState: Agreed = false;
export const playerNameState: PlayerName = DEFAULT_USER_NAME;
export const dateState: Date = DEFAULT_DATE;

export const userState: Player = {
  money: DEFAULT_USER_MONEY,
  points: DEFAULT_USER_POINTS,
  status: DEFAULT_USER_STATUS,
  mood: DEFAULT_USER_MOOD,
};

export const hardwareState: Hardware = {
  computer: DEFAULT_HARDWARE_COMPUTER,
  memory: DEFAULT_HARDWARE_MEMORY,
  disk: DEFAULT_HARDWARE_DISK,
  modem: DEFAULT_HARDWARE_MODEM,
  cd: DEFAULT_HARDWARE_CD,
  sound: DEFAULT_HARDWARE_SOUND,
};

export const softwareState: Software = {
  os: DEFAULT_SOFTWARE_OS,
  antivirus: DEFAULT_SOFTWARE_ANTIVIRUS,
  programming: DEFAULT_SOFTWARE_PROGRAMMING,
  bbs: DEFAULT_SOFTWARE_BBS,
  other: DEFAULT_SOFTWARE_OTHER,
};

export const workState: Work = {
  salary: DEFAULT_WORK_SALARY,
  position: DEFAULT_WORK_POSITION,
};
