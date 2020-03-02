import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './SimpleModal';

const BbsModal = (props) => {
  const { isShown, onClose } = props;

  return (
    <SimpleModal isShown={isShown}>
      BBS will be here.{' '}
      <span role="presentation" onClick={onClose}>
        Close
      </span>
    </SimpleModal>
  );
};

BbsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

BbsModal.defaultProps = {
  isShown: false,
};

export default BbsModal;
