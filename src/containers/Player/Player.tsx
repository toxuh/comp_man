import React, { useState } from 'react';

import { Panel } from '../../components';

import { userState } from '../../constants/initialState';

import { Mood, Status } from '../../constants';

const Player: React.FC = () => {
  const [user] = useState(userState);

  return (
    <Panel
      fields={[
        { name: 'Денег', value: `${user.money}$`, noTranslate: true },
        { name: 'Очки', value: user.points, noTranslate: true },
        { name: 'Ваш статус', value: Status[user.status] },
        { name: 'Настроение', value: Mood[user.mood] },
      ]}
    />
  );
};

export default Player;
