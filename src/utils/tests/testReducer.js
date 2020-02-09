import deepFreeze from 'deep-freeze';

const testReducer = ({ stateBefore, stateAfter, action, reducer }) => {
  deepFreeze(action);
  deepFreeze(stateAfter);

  return {
    received: reducer(stateBefore, action),
    expected: stateAfter,
  };
};

export default testReducer;
