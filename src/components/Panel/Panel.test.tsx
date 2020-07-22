import React from 'react';
import { shallow } from 'enzyme';

import Panel from './Panel';

describe('~/components/Panel/Panel', () => {
  it('renders with header', () => {
    expect.assertions(1);

    const props = {
      header: 'Panel Header',
      fields: [
        { name: 'Field 1', value: 'Value 1' },
        { name: 'Field 2', value: 60 },
      ],
    };

    const wrapper = shallow(<Panel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="Panel"
      >
        <div
          className="Panel__header"
        >
          Panel Header
        </div>
        <p
          className="Panel__field"
          key="Field 1"
        >
          Field 1 -
          <span>
            Value 1
          </span>
        </p>
        <p
          className="Panel__field"
          key="Field 2"
        >
          Field 2 -
          <span>
            60
          </span>
        </p>
      </div>
    `);
  });

  it('renders without header', () => {
    expect.assertions(1);

    const props = {
      fields: [
        { name: 'Field 1', value: 'Value 1' },
        { name: 'Field 2', value: 60 },
      ],
    };

    const wrapper = shallow(<Panel {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="Panel"
      >
        <p
          className="Panel__field"
          key="Field 1"
        >
          Field 1 -
          <span>
            Value 1
          </span>
        </p>
        <p
          className="Panel__field"
          key="Field 2"
        >
          Field 2 -
          <span>
            60
          </span>
        </p>
      </div>
    `);
  });
});
