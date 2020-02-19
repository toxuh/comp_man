import React from 'react';
import { shallow } from 'enzyme';

import AgreeScreen from './AgreeScreen';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => 0),
}));

describe('<AgreeScreen />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<AgreeScreen />);

    expect(wrapper).toMatchInlineSnapshot(`
      <AgreeScreen
        onSubmitAgree={[Function]}
      />
    `);
  });
});
