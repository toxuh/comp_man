import React from 'react';
import { shallow } from 'enzyme';

import Work from './Work';

const props = {
  position: 'programmer',
  salary: 100,
};

describe('~/components/Work/Work', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Work {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="Work"
      >
        <div
          className="Panel__header"
        >
          <Component />
        </div>
        <div
          className="Work__field"
        >
          <Component />
           /
          100
          $
          <span
            className="Work__description"
          >
            <Component />
          </span>
        </div>
      </div>
    `);
  });
});
