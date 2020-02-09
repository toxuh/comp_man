import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

const props = {
  trigger: {
    icon: 'plus',
  },
};

describe('<Modal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Modal {...props}>Modal content</Modal>);

    expect(wrapper).toMatchInlineSnapshot();
  });
});
