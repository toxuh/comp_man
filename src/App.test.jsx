import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<App />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="App"
      >
        <AppBootstrap>
          <AppLayout
            computerPanel={<ComputerPanel />}
            datePanel={<DatePanel />}
            playerPanel={<PlayerPanel />}
            softPanel={<SoftPanel />}
          />
        </AppBootstrap>
      </div>
    `);
  });
});
