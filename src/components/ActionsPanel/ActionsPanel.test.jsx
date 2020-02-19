import React from 'react';
import { shallow } from 'enzyme';

import ActionsPanel from './ActionsPanel';

const props = {
  items: [
    { name: 'Test name 1', handleClick: jest.fn() },
    { name: 'Test name 2', handleClick: jest.fn() },
  ],
};

describe('<ActionsPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<ActionsPanel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <ListGroup
        className="ActionsPanel"
        horizontal={null}
        variant={null}
      >
        <ListGroupItem
          active={false}
          disabled={false}
          key="Test name 1"
          onClick={[MockFunction]}
          variant={null}
        >
          Test name 1
        </ListGroupItem>
        <ListGroupItem
          active={false}
          disabled={false}
          key="Test name 2"
          onClick={[MockFunction]}
          variant={null}
        >
          Test name 2
        </ListGroupItem>
      </ListGroup>
    `);
  });
});
