import { HOUR_DURATION } from '../../constants';

import { Date as DateType } from '../../types';

const timerCounter = ({ gameDate, isCounting }: DateType): Promise<string> => {
  return new Promise((resolve) => {
    const date = new Date(gameDate);

    setTimeout(() => {
      if (isCounting) {
        date.setTime(date.getTime() + 60 * 60 * 1000);
      }

      resolve(date.toString());
    }, HOUR_DURATION);
  });
};

export default timerCounter;
