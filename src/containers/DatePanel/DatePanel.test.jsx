import React from 'react';
import { shallow } from 'enzyme';

import DatePanel from './DatePanel';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 0),
}));

describe('<DatePanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<DatePanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <DatePanel
        date={0}
        time={0}
      />
    `);
  });
});
