import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import * as selectors from './selectors';
import messages from './messages';

import { Dictionary, Panel as PanelComponent } from '~/components';

const ComputerPanel = () => {
  const intl = useIntl();

  const computer = useSelector(selectors.computerSelector);
  const memory = useSelector(selectors.memorySelector);
  const hdd = useSelector(selectors.hddSelector);
  const modem = useSelector(selectors.modemSelector);
  const cd = useSelector(selectors.cdSelector);
  const sound = useSelector(selectors.soundSelector);

  const panelProps = {
    header: intl.formatMessage(messages.header),
    fields: [
      {
        name: intl.formatMessage(messages.computer),
        value: <Dictionary name="computer" value={computer} />,
      },
      {
        name: intl.formatMessage(messages.memory),
        value: <Dictionary name="memory" value={memory} />,
      },
      {
        name: intl.formatMessage(messages.hdd),
        value: <Dictionary name="hdd" value={hdd} />,
      },
      {
        name: intl.formatMessage(messages.modem),
        value: <Dictionary name="modem" value={modem} />,
      },
      {
        name: intl.formatMessage(messages.cd),
        value: <Dictionary name="cd" value={cd} />,
      },
      {
        name: intl.formatMessage(messages.sound),
        value: <Dictionary name="sound" value={sound} />,
      },
    ],
  };

  /* eslint-disable-next-line */
  return <PanelComponent {...panelProps} />;
};

export default ComputerPanel;
