import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './SimpleModal';

const ComputerModal = (props) => {
  const { isShown, onClose } = props;

  return (
    <SimpleModal isShown={isShown}>
      Computer will be here.{' '}
      <span role="presentation" onClick={onClose}>
        Close
      </span>
    </SimpleModal>
  );
};

ComputerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

ComputerModal.defaultProps = {
  isShown: false,
};

export default ComputerModal;
