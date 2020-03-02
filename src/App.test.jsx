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
            actionsPanel={<ActionsPanel />}
            computerPanel={<ComputerPanel />}
            datePanel={<DatePanel />}
            newsPanel={<NewsPanel />}
            playerPanel={<PlayerPanel />}
            softPanel={<SoftPanel />}
            workPanel={<WorkPanel />}
          />
        </AppBootstrap>
      </div>
    `);
  });
});
