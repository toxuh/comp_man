import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import * as selectors from './selectors';
import messages from './messages';

import { Panel as PanelComponent } from '~/components';

const SoftPanel = () => {
  const intl = useIntl();

  const os = useSelector(selectors.osSelector);
  const antivirus = useSelector(selectors.antivirusSelector);
  const programming = useSelector(selectors.programmingSelector);
  const bbs = useSelector(selectors.bbsSelector);
  const other = useSelector(selectors.otherSelector);

  const panelProps = {
    header: intl.formatMessage(messages.header),
    fields: [
      { name: intl.formatMessage(messages.os), value: os },
      { name: intl.formatMessage(messages.antivirus), value: antivirus },
      { name: intl.formatMessage(messages.programming), value: programming },
      { name: intl.formatMessage(messages.bbs), value: bbs },
      { name: intl.formatMessage(messages.other), value: other },
    ],
  };

  /* eslint-disable-next-line */
  return <PanelComponent {...panelProps} />;
};

export default SoftPanel;
