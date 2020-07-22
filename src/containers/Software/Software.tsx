import React, { useState } from 'react';

import { Panel } from '../../components';

import { softwareState } from '../../constants/initialState';

import { Antivirus, Bbs, OS, Other, Programming } from '../../constants';

const Software: React.FC = () => {
  const [software] = useState(softwareState);

  return (
    <Panel
      header="Установленный soft"
      fields={[
        { name: 'Система', value: OS[software.os] },
        { name: 'Антивирус', value: Antivirus[software.antivirus] },
        { name: 'Программи-ие', value: Programming[software.programming] },
        { name: 'BBS ка', value: Bbs[software.bbs] },
        { name: 'Другой soft', value: Other[software.other] },
      ]}
    />
  );
};

export default Software;
