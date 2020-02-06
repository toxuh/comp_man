import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import * as selectors from './selectors';
import messages from './messages';

import { Panel as PanelComponent } from '~/components';

const PlayerPanel = () => {
  const intl = useIntl();

  const money = useSelector(selectors.moneySelector);
  const points = useSelector(selectors.pointsSelector);
  const status = useSelector(selectors.statusSelector);
  const mood = useSelector(selectors.moodSelector);

  const panelProps = {
    header: false,
    fields: [
      { name: intl.formatMessage(messages.money), value: money },
      { name: intl.formatMessage(messages.points), value: points },
      { name: intl.formatMessage(messages.status), value: status },
      { name: intl.formatMessage(messages.mood), value: mood },
    ],
  };

  /* eslint-disable-next-line */
  return <PanelComponent {...panelProps} />;
};

export default PlayerPanel;
