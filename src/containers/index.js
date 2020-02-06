import reducer from './uiRootReducer';
import { STORE_SLICE_NAME as UI_ROOT_STORE_SLICE_NAME } from './constants';

import AppLayout from './AppLayout/AppLayout';
import Modal from './Modal/Modal';
import PlayerPanel from './PlayerPanel/PlayerPanel';

export { reducer, UI_ROOT_STORE_SLICE_NAME, AppLayout, Modal, PlayerPanel };
