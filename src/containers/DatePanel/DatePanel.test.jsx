import React from 'react';
import { shallow } from 'enzyme';

import DatePanel from './DatePanel';

jest.mock('react-redux', () => ({
  useSelector: jest
    .fn()
    .mockReturnValueOnce('01.01.1998')
    .mockReturnValueOnce(9),
}));

describe('<DatePanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<DatePanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <DatePanel
        date="01.01.1998"
        time={9}
      />
    `);
  });
});
