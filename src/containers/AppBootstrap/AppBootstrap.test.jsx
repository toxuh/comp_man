import React from 'react';
import { shallow } from 'enzyme';

import AppBootstrap from './AppBootstrap';

jest.mock('react-redux', () => ({
  useSelector: jest
    .fn()
    // First render
    .mockReturnValueOnce(null)
    // Render with player name
    .mockResolvedValueOnce('Player Name'),
}));

describe('<AppBootstrap />', () => {
  it('renders first screen', () => {
    expect.assertions(1);

    const wrapper = shallow(<AppBootstrap>Welcome</AppBootstrap>);

    expect(wrapper).toMatchInlineSnapshot(`""`);
  });

  it('renders with player name', () => {
    expect.assertions(1);

    const wrapper = shallow(<AppBootstrap>Welcome</AppBootstrap>);

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <HelmetWrapper
          defer={true}
          encodeSpecialCharacters={true}
          title="Computer man [object Promise]"
        />
        Welcome
      </Fragment>
    `);
  });
});
