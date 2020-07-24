import React, { useState } from 'react';

import { Panel } from '../../components';

import { userState } from '../../constants/initialState';

import { Mood, Status } from '../../constants';

const Player: React.FC = () => {
  const [user] = useState(userState);

  return (
    <Panel
      fields={[
        { name: 'money', value: `${user.money}$`, noTranslate: true },
        { name: 'points', value: user.points, noTranslate: true },
        { name: 'status', value: Status[user.status] },
        { name: 'mood', value: Mood[user.mood] },
      ]}
    />
  );
};

export default Player;
