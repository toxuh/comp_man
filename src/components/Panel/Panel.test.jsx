import React from 'react';
import { shallow } from 'enzyme';

import Panel from './Panel';

const props = {
  header: 'Panel heading',
  fields: [
    { name: 'Field1', value: 100 },
    { name: 'Field2', value: 75 },
    { name: 'Field3', value: 50 },
    { name: 'Field4', value: 25 },
  ],
};

describe('<Panel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Panel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="Panel"
      >
        <div
          className="Panel__header"
        >
          Panel heading
        </div>
        <p
          className="Panel__field"
          key="Field1"
        >
          Field1 -
          <span>
            100
          </span>
        </p>
        <p
          className="Panel__field"
          key="Field2"
        >
          Field2 -
          <span>
            75
          </span>
        </p>
        <p
          className="Panel__field"
          key="Field3"
        >
          Field3 -
          <span>
            50
          </span>
        </p>
        <p
          className="Panel__field"
          key="Field4"
        >
          Field4 -
          <span>
            25
          </span>
        </p>
      </div>
    `);
  });
});
