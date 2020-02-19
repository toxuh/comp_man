import React from 'react';
import { shallow } from 'enzyme';

import WorkPanel from './WorkPanel';

const props = {
  date: '14.03.1998',
  time: 14,
};

describe('<DatePanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<WorkPanel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="WorkPanel"
      >
        <div
          className="Panel__header"
        >
          Your job
        </div>
        <div
          className="WorkPanel__field"
        >
           /
          $
          <span
            className="WorkPanel__description"
          >
            per day
          </span>
        </div>
      </div>
    `);
  });
});
