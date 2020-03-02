import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './SimpleModal';

const JobModal = (props) => {
  const { isShown, onClose } = props;

  return (
    <SimpleModal isShown={isShown}>
      Job will be here.{' '}
      <span role="presentation" onClick={onClose}>
        Close
      </span>
    </SimpleModal>
  );
};

JobModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

JobModal.defaultProps = {
  isShown: false,
};

export default JobModal;
