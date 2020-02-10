import React from 'react';
import { shallow } from 'enzyme';

import PlayerPanel from './PlayerPanel';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 0),
}));

describe('<PlayerPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<PlayerPanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Panel
        fields={
          Array [
            Object {
              "name": "Money",
              "value": "0$",
            },
            Object {
              "name": "Points",
              "value": 0,
            },
            Object {
              "name": "Your status",
              "value": <Dictionary
                name="status"
                value={0}
              />,
            },
            Object {
              "name": "Mood",
              "value": <Dictionary
                name="mood"
                value={0}
              />,
            },
          ]
        }
        header={false}
      />
    `);
  });
});
