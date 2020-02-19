import React from 'react';
import { shallow } from 'enzyme';

import WorkPanel from './WorkPanel';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 0),
}));

describe('<WorkPanel />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<WorkPanel />);

    expect(wrapper).toMatchInlineSnapshot(`
      <WorkPanel
        position={
          <Dictionary
            name="position"
            value={0}
          />
        }
        salary={0}
      />
    `);
  });
});
