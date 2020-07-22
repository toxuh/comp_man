import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('~/components/Layout/Layout', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <Layout>
        <p>Hello World!</p>
      </Layout>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="Layout"
      >
        <p>
          Hello World!
        </p>
      </div>
    `);
  });
});
