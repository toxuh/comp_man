const HOUR_DURATION = 1000; // In milliseconds

const counter = (currentDate, currentTime, isCounting) => {
  const date = new Date(currentDate);
  let time = currentTime;
  const interval = setInterval(() => {
    time += 1;
  }, HOUR_DURATION);

  if (!isCounting) {
    clearInterval(interval);
  }

  return {
    date,
    time,
  };
};

export default counter;
