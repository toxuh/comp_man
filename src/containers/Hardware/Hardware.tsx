import React, { useState } from 'react';

import { Panel } from '../../components';

import { hardwareState } from '../../constants/initialState';

import { CD, Computer, Disk, Memory, Modem, Sound } from '../../constants';

const Hardware: React.FC = () => {
  const [hardware] = useState(hardwareState);

  return (
    <Panel
      header="hardwareHeading"
      fields={[
        { name: 'computer', value: Computer[hardware.computer] },
        { name: 'memory', value: Memory[hardware.memory] },
        { name: 'disk', value: Disk[hardware.disk] },
        { name: 'modem', value: Modem[hardware.modem] },
        { name: 'cd', value: CD[hardware.cd] },
        { name: 'sound', value: Sound[hardware.sound] },
      ]}
    />
  );
};

export default Hardware;
