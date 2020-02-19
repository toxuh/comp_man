import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './messages';

const Dictionary = (props) => {
  const intl = useIntl();
  const { name, value } = props;

  const values = {
    status: [
      intl.formatMessage(messages.newbie),
      intl.formatMessage(messages.programmer),
      intl.formatMessage(messages.hacker),
    ],
    mood: [
      intl.formatMessage(messages.bad),
      intl.formatMessage(messages.normal),
      intl.formatMessage(messages.good),
      intl.formatMessage(messages.excellent),
    ],
    computer: [intl.formatMessage(messages.no), '386DX-40', '486DX-66'],
    memory: [intl.formatMessage(messages.no), 4, 16, 32],
    hdd: [intl.formatMessage(messages.no), 210],
    modem: [intl.formatMessage(messages.no), 2400],
    cd: [intl.formatMessage(messages.no), 4],
    sound: [intl.formatMessage(messages.no), 'Sound Blaster'],
    os: [
      intl.formatMessage(messages.no),
      'Windows 3.11',
      'Windows 95',
      'Windows NT 4.0',
      'OS/2 5.0 Warp',
    ],
    antivirus: [intl.formatMessage(messages.no)],
    programming: [
      intl.formatMessage(messages.no),
      'Pascal',
      'Assembler',
      'Visual Basic',
      'Delphi 3.0',
    ],
    bbs: [intl.formatMessage(messages.no)],
    other: [intl.formatMessage(messages.no)],
    position: [
      intl.formatMessage(messages.unemployed),
      intl.formatMessage(messages.locksmith),
    ],
  };

  return values[name][value];
};

Dictionary.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Dictionary;
