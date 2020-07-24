import React, { useState } from 'react';

import { Work as WorkComponent } from '../../components';

import { Work as WorkEnums } from '../../constants';
import { workState } from '../../constants/initialState';

const Work: React.FC = () => {
  const [work] = useState(workState);

  return (
    <WorkComponent position={WorkEnums[work.position]} salary={work.salary} />
  );
};

export default Work;
