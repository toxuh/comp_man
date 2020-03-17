const EventsGenerator = (arrayOfEvents) => {
  return arrayOfEvents.length
    ? arrayOfEvents[Math.floor(Math.random() * arrayOfEvents.length)]
    : 0;
};

export default EventsGenerator;
