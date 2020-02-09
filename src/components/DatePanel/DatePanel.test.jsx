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
        className="DatePanel"
      >
        <div
          className="DatePanel__field Date"
        >
          14.03.1998
        </div>
        <div
          className="DatePanel__field Time"
        >
          14:00
        </div>
      </div>
    `);
  });
});
