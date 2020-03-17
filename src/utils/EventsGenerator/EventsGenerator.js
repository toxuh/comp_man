import GetRandomItemFromArray from './GetRandomItemFromArray';

import { MAX_ACTION_TIME, MIN_ACTION_TIME } from '~/constants';

const EventsGenerator = (arrayOfEvents) => {
  const eventDelay = Math.floor(
    Math.random() * (MAX_ACTION_TIME - MIN_ACTION_TIME) + MIN_ACTION_TIME,
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GetRandomItemFromArray(arrayOfEvents));
    }, eventDelay);
  });
};

export default EventsGenerator;
