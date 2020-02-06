import React from 'react';
import { mount } from 'enzyme';

import AppLayout from './AppLayout';

const props = {
  playerPanel: <div>Player panel</div>,
  computerPanel: <div>Computer panel</div>,
  softPanel: <div>Software panel</div>,
};

describe('<AppLayout />', () => {
  it('renders app', () => {
    expect.assertions(1);

    const wrapper = mount(<AppLayout {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <AppLayout
        computerPanel={
          <div>
            Computer panel
          </div>
        }
        playerPanel={
          <div>
            Player panel
          </div>
        }
        softPanel={
          <div>
            Software panel
          </div>
        }
      >
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
                    >
                      <div>
                        Player panel
                      </div>
                      <div>
                        Computer panel
                      </div>
                      <div>
                        Software panel
                      </div>
                    </div>
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
