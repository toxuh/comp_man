import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';

import AgreeScreen from './AgreeScreen';
import IntroduceScreen from './IntroduceScreen';

import useAppBootstrap from './useAppBootstrap';

import messages from './messages';

const AppBootstrap = (props) => {
  const intl = useIntl();
  const { children } = props;
  const { playerName, isAgreed, startTimer } = useAppBootstrap();

  if (!playerName && !isAgreed) {
    return <IntroduceScreen />;
  }

  if (playerName && !isAgreed) {
    return <AgreeScreen />;
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
