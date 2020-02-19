import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';

import AgreeScreen from './AgreeScreen';
import IntroduceScreen from './IntroduceScreen';
import messages from './messages';
import { agreedSelector } from './selectors';

import { playerNameSelector } from '../PlayerPanel/selectors';

const AppBootstrap = (props) => {
  const intl = useIntl();
  const { children } = props;

  const playerName = useSelector(playerNameSelector);
  const isAgreed = useSelector(agreedSelector);

  if (!playerName && !isAgreed) {
    return <IntroduceScreen />;
  }

  if (playerName && !isAgreed) {
    return <AgreeScreen />;
  }

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
