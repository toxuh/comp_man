import React, { useState } from 'react';

import { Panel } from '../../components';

import { softwareState } from '../../constants/initialState';

import { Antivirus, Bbs, OS, Other, Programming } from '../../constants';

const Software: React.FC = () => {
  const [software] = useState(softwareState);

  return (
    <Panel
      header="softwareHeading"
      fields={[
        { name: 'system', value: OS[software.os] },
        { name: 'antivirus', value: Antivirus[software.antivirus] },
        { name: 'programming', value: Programming[software.programming] },
        { name: 'bbs', value: Bbs[software.bbs] },
        { name: 'otherSoftware', value: Other[software.other] },
      ]}
    />
  );
};

export default Software;
