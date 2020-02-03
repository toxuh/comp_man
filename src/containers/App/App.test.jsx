import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders app', () => {
    expect.assertions(1);

    const wrapper = mount(<App />);

    expect(wrapper).toMatchInlineSnapshot(`ReactWrapper {}`);
  });
});
