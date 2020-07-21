import React, { Dispatch, SetStateAction } from 'react';

import { Panel } from '../../components';

import { Mood, Status } from '../../constants';

import { Player as PlayerType } from '../../types';

type PlayerProps = {
  player: PlayerType;
  handleChangePlayerState: Dispatch<SetStateAction<PlayerType>>;
};

const Player: React.FC<PlayerProps> = ({
  player: { money, mood, points, status },
}) => {
  return (
    <Panel
      fields={[
        { name: 'Денег', value: `${money}$` },
        { name: 'Очки', value: points },
        { name: 'Ваш статус', value: Status[status] },
        { name: 'Настроение', value: Mood[mood] },
      ]}
    />
  );
};

export default Player;
