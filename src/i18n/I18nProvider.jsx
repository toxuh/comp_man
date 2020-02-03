import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import getUserLocale from 'get-user-locale';

import ruMessages from './translations/ru.json';

const I18nProvider = ({ children }) => {
  const activeLocale = getUserLocale();

  const messages = useMemo(
    // TODO: return user locale using
    // () => (activeLocale.includes('ru') ? ruMessages : enMessages),
    () => ruMessages,
    [],
  );

  return (
    <IntlProvider locale={activeLocale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(I18nProvider);
