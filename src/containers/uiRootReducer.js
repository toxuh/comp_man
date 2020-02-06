import { combineReducers } from 'redux';

import reducer from './AppLayout/reducer';
import { STORE_SLICE_NAME as APP_STORE_SLICE_NAME } from './AppLayout/constants';

const uiRootReducer = combineReducers({
  [APP_STORE_SLICE_NAME]: reducer,
});

export default uiRootReducer;
