import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';

import { playerNameSelector } from './selectors';

import messages from './messages';

import IntroduceScreen from './IntroduceScreen';

const AppBootstrap = (props) => {
  const intl = useIntl();
  const { children } = props;

  const playerName = useSelector(playerNameSelector);

  if (!playerName) {
    return <IntroduceScreen />;
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
