export const GAME_NAME = 'Компьютерщик';

export const DEFAULT_USER_NAME = undefined;
export const HOUR_DURATION = 1000;
export const DEFAULT_DATE =
  'Thu Jan 01 1998 09:00:00 GMT+0100 (Central European Standard Time)';

export const DEFAULT_USER_MONEY = 60;
export const DEFAULT_USER_POINTS = 0;
export const DEFAULT_USER_STATUS = 0;
export const DEFAULT_USER_MOOD = 1;

export const DEFAULT_HARDWARE_COMPUTER = 0;
export const DEFAULT_HARDWARE_MEMORY = 0;
export const DEFAULT_HARDWARE_DISK = 0;
export const DEFAULT_HARDWARE_MODEM = 0;
export const DEFAULT_HARDWARE_CD = 0;
export const DEFAULT_HARDWARE_SOUND = 0;

export const DEFAULT_SOFTWARE_OS = 0;
export const DEFAULT_SOFTWARE_ANTIVIRUS = 0;
export const DEFAULT_SOFTWARE_PROGRAMMING = 0;
export const DEFAULT_SOFTWARE_BBS = 0;
export const DEFAULT_SOFTWARE_OTHER = 0;

export enum Mood {
  bad,
  normal,
  good,
  excellent,
}

export enum Status {
  newbie,
  programmer,
  hacker,
}

export enum Actions {
  computer,
  software,
  hacking,
  bbs,
  job,
  entertainment,
}

export enum Computer {
  no,
  '386-66',
  '486-66',
}

export enum Memory {
  no,
  '4Mb',
  '8Mb',
  '16Mb',
}

export enum Disk {
  no,
  '210Mb',
}

export enum Modem {
  no,
  '2400Mb',
}

export enum CD {
  no,
  '4x',
}

export enum Sound {
  no,
  yes,
}

export enum OS {
  no,
  windows3,
  windows95,
  windowsNt,
  os2,
}

export enum Antivirus {
  no,
  yes,
}

export enum Programming {
  no,
  pascal,
  assembler,
  visualBasic,
  delphi,
}

export enum Bbs {
  no,
  yes,
}

export enum Other {
  no,
  yes,
}
