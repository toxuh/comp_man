import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Modal as ModalComponent } from '~/components';

const Modal = (props) => {
  const { children, ...otherProps } = props;
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
  children: PropTypes.node.isRequired,
};

export default Modal;
