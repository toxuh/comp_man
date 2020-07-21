export type Agreed = boolean;
export type PlayerName = string | undefined;

export type Player = {
  money: number;
  points: number;
  status: number;
  mood: number;
};

export type Date = {
  date: string;
  isCounting: boolean;
};

export type Panel = {
  header?: string;
  fields: { name: string; value: number | string }[];
};
