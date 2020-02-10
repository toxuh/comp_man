import reducer from './uiRootReducer';
import { STORE_SLICE_NAME as UI_ROOT_STORE_SLICE_NAME } from './constants';

import AppBootstrap from './AppBootstrap/AppBootstrap';
import ComputerPanel from './ComputerPanel/ComputerPanel';
import DatePanel from './DatePanel/DatePanel';
import Modal from './Modal/Modal';
import PlayerPanel from './PlayerPanel/PlayerPanel';
import SoftPanel from './SoftPanel/SoftPanel';

export {
  reducer,
  UI_ROOT_STORE_SLICE_NAME,
  AppBootstrap,
  ComputerPanel,
  DatePanel,
  Modal,
  PlayerPanel,
  SoftPanel,
};