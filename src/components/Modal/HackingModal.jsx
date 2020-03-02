import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './SimpleModal';

const HackingModal = (props) => {
  const { isShown, onClose } = props;

  return (
    <SimpleModal isShown={isShown}>
      Hacking will be here.{' '}
      <span role="presentation" onClick={onClose}>
        Close
      </span>
    </SimpleModal>
  );
};

HackingModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

HackingModal.defaultProps = {
  isShown: false,
};

export default HackingModal;
