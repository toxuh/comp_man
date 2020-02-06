import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as RBModal } from 'react-bootstrap';

import './Modal.css';

const Modal = (props) => {
  const {
    isOpened,
    trigger,
    header,
    isHeaderCloseButton,
    children,
    handleClose,
    handleOpen,
  } = props;

  const renderTriggerComponent = useMemo(
    () => (
      <Button className={trigger.className} onClick={handleOpen}>
        {trigger.text}
      </Button>
    ),
    [trigger.text, trigger.className, handleOpen],
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
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  trigger: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
  }).isRequired,
  header: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isHeaderCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  header: false,
  isHeaderCloseButton: true,
};

export default Modal;
