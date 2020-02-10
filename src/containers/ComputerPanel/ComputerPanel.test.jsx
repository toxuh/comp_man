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
              "value": <Dictionary
                name="computer"
                value={0}
              />,
            },
            Object {
              "name": "RAM",
              "value": <Dictionary
                name="memory"
                value={0}
              />,
            },
            Object {
              "name": "HDD",
              "value": <Dictionary
                name="hdd"
                value={0}
              />,
            },
            Object {
              "name": "Modem",
              "value": <Dictionary
                name="modem"
                value={0}
              />,
            },
            Object {
              "name": "CD-ROM",
              "value": <Dictionary
                name="cd"
                value={0}
              />,
            },
            Object {
              "name": "Sound Blaster",
              "value": <Dictionary
                name="sound"
                value={0}
              />,
            },
          ]
        }
        header="Your computer"
      />
    `);
  });
});
