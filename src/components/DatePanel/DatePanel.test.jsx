import React from 'react';
import { shallow } from 'enzyme';

import DatePanel from './DatePanel';

const props = {
  position: 'Unemployed',
  salary: 0,
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
        />
        <div
          className="DatePanel__field Time"
        >
          undefined:00
        </div>
      </div>
    `);
  });
});
