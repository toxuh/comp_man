import { defineMessages } from 'react-intl';

export default defineMessages<keyof Record<string, undefined>>({
  computer: {
    id: 'Actions.computer',
    defaultMessage: 'Computer',
  },
  software: {
    id: 'Actions.software',
    defaultMessage: 'Software',
  },
  hacking: {
    id: 'Actions.hacking',
    defaultMessage: 'Hacking',
  },
  bbs: {
    id: 'Actions.bbs',
    defaultMessage: 'BBS',
  },
  job: {
    id: 'Actions.job',
    defaultMessage: 'Find job',
  },
  entertainment: {
    id: 'Actions.entertainment',
    defaultMessage: 'Entertainment',
  },
});
