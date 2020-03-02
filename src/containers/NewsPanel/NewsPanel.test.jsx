import React from 'react';
import { shallow } from 'enzyme';

import NewsPanel from './NewsPanel';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 'New data'),
}));

describe('<NewsPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<NewsPanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <NewsPanel
        data="New data"
      />
    `);
  });
});
