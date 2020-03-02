import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './SimpleModal';

const SoftwareModal = (props) => {
  const { isShown, onClose } = props;

  return (
    <SimpleModal isShown={isShown}>
      Software will be here.{' '}
      <span role="presentation" onClick={onClose}>
        Close
      </span>
    </SimpleModal>
  );
};

SoftwareModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

SoftwareModal.defaultProps = {
  isShown: false,
};

export default SoftwareModal;
