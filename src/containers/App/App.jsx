import React from 'react';
import { useIntl } from 'react-intl';

import messages from './messages';

const App = () => {
  const intl = useIntl();

  return <>{intl.formatMessage(messages.welcome)}</>;
};

export default App;
