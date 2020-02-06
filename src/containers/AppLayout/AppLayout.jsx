import React from 'react';
import PropTypes from 'prop-types';

import { AppLayout as AppLayoutComponent } from '~/components';

const AppLayout = (props) => {
  const { playerPanel } = props;

  return <AppLayoutComponent playerPanel={playerPanel} />;
};

AppLayout.propTypes = {
  playerPanel: PropTypes.node.isRequired,
};

export default AppLayout;
