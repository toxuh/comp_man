import { combineReducers } from 'redux';

import { UI_ROOT_STORE_SLICE_NAME } from '~/containers';
import reducer from '~/containers/AppBootstrap/reducer';

export default combineReducers({
  [UI_ROOT_STORE_SLICE_NAME]: reducer,
});
