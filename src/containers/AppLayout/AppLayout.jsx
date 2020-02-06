import React from 'react';
import PropTypes from 'prop-types';

import { AppLayout as AppLayoutComponent } from '~/components';

const AppLayout = (props) => {
  const { computerPanel, playerPanel, softPanel } = props;

  return (
    <AppLayoutComponent
      playerPanel={playerPanel}
      computerPanel={computerPanel}
      softPanel={softPanel}
    />
  );
};

AppLayout.propTypes = {
  playerPanel: PropTypes.node.isRequired,
  computerPanel: PropTypes.node.isRequired,
  softPanel: PropTypes.node.isRequired,
};

export default AppLayout;
