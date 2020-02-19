const HOUR_DURATION = 1000; // In milliseconds

const counter = (currentDate, isCounting) => {
  return new Promise((resolve) => {
    const date = new Date(currentDate);

    setTimeout(() => {
      if (isCounting) {
        date.setTime(date.getTime() + 60 * 60 * 1000);
      }

      resolve({
        date: date.toString(),
      });
    }, HOUR_DURATION);
  });
};

export default counter;
