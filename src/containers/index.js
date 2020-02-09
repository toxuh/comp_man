import reducer from './uiRootReducer';
import { STORE_SLICE_NAME as UI_ROOT_STORE_SLICE_NAME } from './constants';

import AppBootstrap from './AppBootstrap/AppBootstrap';
import Modal from './Modal/Modal';
import PlayerPanel from './PlayerPanel/PlayerPanel';
import ComputerPanel from './ComputerPanel/ComputerPanel';
import SoftPanel from './SoftPanel/SoftPanel';
import DatePanel from './DatePanel/DatePanel';

export {
  reducer,
  UI_ROOT_STORE_SLICE_NAME,
  AppBootstrap,
  DatePanel,
  Modal,
  PlayerPanel,
  ComputerPanel,
  SoftPanel,
};
