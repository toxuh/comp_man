import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';

const configureStore = (
  initialState,
  additionalMiddlewares = [],
  composeEnhancers = compose,
) => {
  const middlewares = [...additionalMiddlewares];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
};

export default configureStore;
