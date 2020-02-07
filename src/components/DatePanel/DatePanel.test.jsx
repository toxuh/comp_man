import React from 'react';
import { shallow } from 'enzyme';

import DatePanel from './DatePanel';

const props = {
  date: '14.03.1998',
  time: 14,
};

describe('<DatePanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<DatePanel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="Panel"
      >
        <div>
          14.03.1998
        </div>
        <div>
          14
        </div>
      </div>
    `);
  });
});
