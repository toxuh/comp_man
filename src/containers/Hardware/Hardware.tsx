import React, { useState } from 'react';

import { Panel } from '../../components';

import { hardwareState } from '../../constants/initialState';

import { CD, Computer, Disk, Memory, Modem, Sound } from '../../constants';

const Hardware: React.FC = () => {
  const [hardware] = useState(hardwareState);

  return (
    <Panel
      header="Ваш компьютер"
      fields={[
        { name: 'Компьютер', value: Computer[hardware.computer] },
        { name: 'Память', value: Memory[hardware.memory] },
        { name: 'Винчестер', value: Disk[hardware.disk] },
        { name: 'Модем', value: Modem[hardware.modem] },
        { name: 'CD-ROM', value: CD[hardware.cd] },
        { name: 'Sound Blaster', value: Sound[hardware.sound] },
      ]}
    />
  );
};

export default Hardware;
