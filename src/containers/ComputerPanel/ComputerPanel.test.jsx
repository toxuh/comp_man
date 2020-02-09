import React from 'react';
import { shallow } from 'enzyme';

import ComputerPanel from './ComputerPanel';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 0),
}));

describe('<ComputerPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<ComputerPanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Panel
        fields={
          Array [
            Object {
              "name": "Computer",
              "value": 0,
            },
            Object {
              "name": "RAM",
              "value": 0,
            },
            Object {
              "name": "HDD",
              "value": 0,
            },
            Object {
              "name": "Modem",
              "value": 0,
            },
            Object {
              "name": "CD-ROM",
              "value": 0,
            },
            Object {
              "name": "Sound Blaster",
              "value": 0,
            },
          ]
        }
        header="Your computer"
      />
    `);
  });
});
