import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { agree } from './actions';

import { AgreeScreen as AgreeScreenComponent } from '~/components';

const AgreeScreen = () => {
  const dispatch = useDispatch();

  const handleAgreeChange = useCallback(() => {
    dispatch(agree());
  }, [dispatch]);

  return <AgreeScreenComponent onSubmitAgree={handleAgreeChange} />;
};

export default AgreeScreen;
