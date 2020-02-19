import React from 'react';
import { shallow } from 'enzyme';

import AppBootstrap from './AppBootstrap';

jest.mock('react-redux', () => ({
  useSelector: jest
    .fn()
    // First render
    .mockReturnValueOnce(null)
    // Render with player name
    .mockResolvedValueOnce('Player Name')
    .mockResolvedValueOnce('Is player agreed'),
}));

describe('<AppBootstrap />', () => {
  it('renders introduce screen', () => {
    expect.assertions(1);

    const wrapper = shallow(<AppBootstrap>Welcome</AppBootstrap>);

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <HelmetWrapper
          defer={true}
          encodeSpecialCharacters={true}
          title="Computer man null"
        />
        Welcome
      </Fragment>
    `);
  });

  it('renders agree screen', () => {
    expect.assertions(1);

    const wrapper = shallow(<AppBootstrap>Play and Enjoy</AppBootstrap>);

    expect(wrapper).toMatchInlineSnapshot(`<AgreeScreen />`);
  });

  it('renders with player name', () => {
    expect.assertions(1);

    const wrapper = shallow(<AppBootstrap>Game</AppBootstrap>);

    expect(wrapper).toMatchInlineSnapshot(`<IntroduceScreen />`);
  });
});
