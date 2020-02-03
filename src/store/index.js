import configureStore from './configureStore.env';
import initialState from './initialState';

/** @type {import('redux').Store} */
const store = configureStore(initialState);

export default store;
