import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';

import useAppBootstrap from './useAppBootstrap';

import messages from './messages';

import { AgreeModal, IntroduceModal } from '~/components';

const AppBootstrap = (props) => {
  const intl = useIntl();
  const { children } = props;
  const {
    handleAgreeChange,
    handlePlayerNameChange,
    playerName,
    isAgreed,
    startTimer,
  } = useAppBootstrap();

  if (!playerName && !isAgreed) {
    return <IntroduceModal handlePlayerNameChange={handlePlayerNameChange} />;
  }

  if (playerName && !isAgreed) {
    return <AgreeModal handleAgreeChange={handleAgreeChange} />;
  }

  startTimer();

  return (
    <>
      <Helmet title={`${intl.formatMessage(messages.compMan)} ${playerName}`} />
      {children}
    </>
  );
};

AppBootstrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppBootstrap;
