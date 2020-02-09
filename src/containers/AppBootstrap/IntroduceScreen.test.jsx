import React from 'react';
import { shallow } from 'enzyme';

import IntroduceScreen from './IntroduceScreen';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => 0),
}));

describe('<IntroduceScreen />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<IntroduceScreen />);

    expect(wrapper).toMatchInlineSnapshot(`
      <IntroduceScreen
        onPlayerNameChange={[Function]}
      />
    `);
  });
});
