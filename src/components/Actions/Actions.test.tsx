import React from 'react';
import { shallow } from 'enzyme';

import Actions from './Actions';

const props = {
  items: ['Item 1', 'Item 2'],
};

describe('~/components/Actions/Actions', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Actions {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <ListGroup
        className="Actions"
      >
        <ListGroupItem
          active={false}
          disabled={false}
          key="Item 1"
        />
        <ListGroupItem
          active={false}
          disabled={false}
          key="Item 2"
        />
      </ListGroup>
    `);
  });
});
