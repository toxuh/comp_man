import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './SimpleModal';

const EntertainmentModal = (props) => {
  const { isShown, onClose } = props;

  return (
    <SimpleModal isShown={isShown}>
      Entertainment will be here.{' '}
      <span role="presentation" onClick={onClose}>
        Close
      </span>
    </SimpleModal>
  );
};

EntertainmentModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

EntertainmentModal.defaultProps = {
  isShown: false,
};

export default EntertainmentModal;
