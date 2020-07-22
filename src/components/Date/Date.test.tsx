import React from 'react';
import { shallow } from 'enzyme';

import Date from './Date';

const props = {
  date: '01.01.1998',
  time: '11',
};

describe('~/components/Date/Date', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Date {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="DatePanel"
      >
        <div
          className="DatePanel__field Date"
        >
          01.01.1998
        </div>
        <div
          className="DatePanel__field Time"
        >
          11:00
        </div>
      </div>
    `);
  });
});
