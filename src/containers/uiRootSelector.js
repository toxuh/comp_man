import { STORE_SLICE_NAME } from './constants';

const uiRootSelector = (state) => state[STORE_SLICE_NAME];

export default uiRootSelector;
