import React from 'react';
import { shallow } from 'enzyme';

import SoftPanel from './SoftPanel';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 0),
}));

describe('<SoftPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<SoftPanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Panel
        fields={
          Array [
            Object {
              "name": "OS",
              "value": <Dictionary
                name="os"
                value={0}
              />,
            },
            Object {
              "name": "Antivirus",
              "value": <Dictionary
                name="antivirus"
                value={0}
              />,
            },
            Object {
              "name": "Programming",
              "value": <Dictionary
                name="programming"
                value={0}
              />,
            },
            Object {
              "name": "BBS",
              "value": <Dictionary
                name="antivirus"
                value={0}
              />,
            },
            Object {
              "name": "Other software",
              "value": <Dictionary
                name="antivirus"
                value={0}
              />,
            },
          ]
        }
        header="Installed software"
      />
    `);
  });
});
