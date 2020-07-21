import React from 'react';

import { Panel } from '../../components';

import { Player as PlayerType } from '../../types';

type PlayerProps = {
  player: PlayerType;
};

const Player: React.FC<PlayerProps> = ({
  player: { money, mood, points, status },
}) => {
  return (
    <Panel
      fields={[
        { name: 'Деньги', value: `$${money}` },
        { name: 'Очки', value: points },
        { name: 'Статус', value: status },
        { name: 'Настроение', value: mood },
      ]}
    />
  );
};

export default Player;
