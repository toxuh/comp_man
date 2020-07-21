export type Panel = {
  header?: string;
  fields: { name: string; value: number | string }[];
};

export type Player = {
  name: string;
  money: number;
  points: number;
  status: number;
  mood: number;
};
