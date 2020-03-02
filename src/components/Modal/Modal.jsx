import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as RBModal } from 'react-bootstrap';

import './Modal.css';

const Modal = (props) => {
  const { children, trigger, header, isHeaderCloseButton } = props;
  const [isOpened, toggleModal] = useState(false);

  const handleOpen = useCallback(() => {
    toggleModal(true);
  }, [toggleModal]);

  const handleClose = useCallback(() => {
    toggleModal(false);
  }, [toggleModal]);

  const renderTriggerComponent = useMemo(
    () => (
      <Button className={trigger.className} onClick={handleOpen}>
        {trigger.text}
      </Button>
    ),
    [trigger, handleOpen],
  );

  return (
    <>
      {renderTriggerComponent}
      <RBModal show={isOpened} onHide={handleClose}>
        {header && (
          <RBModal.Header closeButton={isHeaderCloseButton}>
            {header}
          </RBModal.Header>
        )}
        <RBModal.Body>{children}</RBModal.Body>
      </RBModal>
    </>
  );
};

Modal.propTypes = {
  trigger: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isHeaderCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  header: false,
  isHeaderCloseButton: true,
};

export default Modal;
