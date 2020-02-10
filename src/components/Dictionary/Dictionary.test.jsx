import React from 'react';
import { shallow } from 'enzyme';

import Dictionary from './Dictionary';

const props = {
  name: 'computer',
  value: 2,
};

describe('<Dictionary />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Dictionary {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`"486DX-66"`);
  });
});
