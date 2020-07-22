import React from 'react';

import { Actions as ActionsEnum } from '../../constants';

import { Actions as ActionsComponent } from '../../components';

const Actions: React.FC = () => {
  const items = Object.keys(ActionsEnum).filter(
    (a) => typeof ActionsEnum[a as never] === 'number',
  );

  return <ActionsComponent items={items} />;
};

export default Actions;
