import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Modal as ModalComponent } from '~/components';

const Modal = (props) => {
  const { children, trigger, ...otherProps } = props;
  const [isOpened, toggleModal] = useState(false);

  const handleOpen = useCallback(() => {
    toggleModal(true);
  }, [toggleModal]);

  const handleClose = useCallback(() => {
    toggleModal(false);
  }, [toggleModal]);

  return (
    <ModalComponent
      isOpened={isOpened}
      trigger={trigger}
      handleOpen={handleOpen}
      handleClose={handleClose}
      /* eslint-disable-next-line */
      {...otherProps}
    >
      {children}
    </ModalComponent>
  );
};

Modal.propTypes = {
  trigger: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
