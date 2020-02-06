import React from 'react';
import { mount } from 'enzyme';

import AppLayout from './AppLayout';

describe('<AppLayout />', () => {
  it('renders app', () => {
    expect.assertions(1);

    const wrapper = mount(<AppLayout />);

    expect(wrapper).toMatchInlineSnapshot(`
      <AppLayout>
        <div
          className="App"
        >
          <Container
            className="Game"
            fluid={true}
          >
            <div
              className="Game container-fluid"
            >
              <ForwardRef
                noGutters={false}
              >
                <div
                  className="row"
                >
                  <Col>
                    <div
                      className="col"
                    />
                  </Col>
                  <Col>
                    <div
                      className="col"
                    >
                      Col 2
                    </div>
                  </Col>
                </div>
              </ForwardRef>
            </div>
          </Container>
        </div>
      </AppLayout>
    `);
  });
});
