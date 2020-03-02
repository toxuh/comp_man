import React from 'react';
import { shallow } from 'enzyme';

import NewsPanel from './NewsPanel';

const props = {
  data: 'Example of some news',
};

describe('<NewsPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<NewsPanel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="NewsPanel"
      >
        Example of some news
      </div>
    `);
  });
});
