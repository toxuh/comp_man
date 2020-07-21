import React, { Dispatch, SetStateAction } from 'react';

import { Date as DateType } from '../../types';

type DateProps = {
  date: DateType;
  handleChangeDateState: Dispatch<SetStateAction<DateType>>;
};

const Date: React.FC<DateProps> = () => {
  return <p>Date</p>;
};

export default Date;
