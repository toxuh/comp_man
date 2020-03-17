/* eslint-disable-next-line */
import deepFreeze from 'deep-freeze';

const TestReducer = ({ stateBefore, stateAfter, action, reducer }) => {
  deepFreeze(action);
  deepFreeze(stateAfter);

  return {
    received: reducer(stateBefore, action),
    expected: stateAfter,
  };
};

export default TestReducer;
