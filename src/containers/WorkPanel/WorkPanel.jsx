import React from 'react';
import { useSelector } from 'react-redux';

import { positionSelector, salarySelector } from './selectors';

import { Dictionary, WorkPanel as WorkPanelComponent } from '~/components';

const WorkPanel = () => {
  const position = useSelector(positionSelector);
  const salary = useSelector(salarySelector);

  return (
    <WorkPanelComponent
      position={<Dictionary name="position" value={position} />}
      salary={salary}
    />
  );
};

export default WorkPanel;
